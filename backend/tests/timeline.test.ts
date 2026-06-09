import assert from 'node:assert/strict';
import test from 'node:test';
import type { TimelineEvent } from '@tao-passport/shared-types';
import { buildTimeline, getDemoTimeline, normalizeTimelineEvents } from '../src/services/timeline/timelineService.js';

test('normalizes timestamps and sorts merged timeline events deterministically', () => {
  const events: TimelineEvent[] = [
    {
      id: 'community-1',
      title: 'Community milestone',
      description: 'Community event',
      occurredAt: '2026-01-05T00:00:00.000Z',
      source: 'community',
    },
    {
      id: 'chain-1',
      title: 'Chain milestone',
      description: 'Chain event',
      occurredAt: '2025-01-03',
      source: 'chain',
    },
    {
      id: 'gittensor-1',
      title: 'GitTensor milestone',
      description: 'GitTensor event',
      occurredAt: '2026-01-05',
      source: 'gittensor',
    },
    {
      id: 'chain-2',
      title: 'Another chain milestone',
      description: 'Chain event',
      occurredAt: '2026-01-05T00:00:00.000Z',
      source: 'chain',
    },
  ];

  const normalized = normalizeTimelineEvents(events);

  assert.deepEqual(
    normalized.map((event) => [event.id, event.occurredAt]),
    [
      ['chain-1', '2025-01-03T00:00:00.000Z'],
      ['chain-2', '2026-01-05T00:00:00.000Z'],
      ['gittensor-1', '2026-01-05T00:00:00.000Z'],
      ['community-1', '2026-01-05T00:00:00.000Z'],
    ],
  );
});

test('buildTimeline flattens service outputs before sorting', () => {
  const timeline = buildTimeline(
    [
      {
        id: 'later',
        title: 'Later',
        description: 'Later event',
        occurredAt: '2025-10-01T00:00:00.000Z',
        source: 'gittensor',
      },
    ],
    [
      {
        id: 'earlier',
        title: 'Earlier',
        description: 'Earlier event',
        occurredAt: '2024-10-01T00:00:00.000Z',
        source: 'chain',
      },
    ],
  );

  assert.deepEqual(
    timeline.map((event) => event.id),
    ['earlier', 'later'],
  );
});

test('getDemoTimeline returns ordered server-side timeline data', () => {
  assert.deepEqual(
    getDemoTimeline().map((event) => event.id),
    ['first-seen', 'validator-active', 'gittensor-contribution'],
  );
});
