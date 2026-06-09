import type { TimelineEvent } from '@tao-passport/shared-types';

const timelineSourcePriority: Record<TimelineEvent['source'], number> = {
  chain: 0,
  gittensor: 1,
  community: 2,
};

function normalizeTimelineEvent(event: TimelineEvent): TimelineEvent {
  const occurredAt = new Date(event.occurredAt);

  if (Number.isNaN(occurredAt.getTime())) {
    throw new Error(`Invalid timeline timestamp for event "${event.id}"`);
  }

  return {
    ...event,
    occurredAt: occurredAt.toISOString(),
  };
}

function compareTimelineEvents(left: TimelineEvent, right: TimelineEvent): number {
  const timestampDifference = Date.parse(left.occurredAt) - Date.parse(right.occurredAt);

  if (timestampDifference !== 0) {
    return timestampDifference;
  }

  const sourceDifference = timelineSourcePriority[left.source] - timelineSourcePriority[right.source];

  if (sourceDifference !== 0) {
    return sourceDifference;
  }

  const titleDifference = left.title.localeCompare(right.title);

  if (titleDifference !== 0) {
    return titleDifference;
  }

  return left.id.localeCompare(right.id);
}

export function normalizeTimelineEvents(events: TimelineEvent[]): TimelineEvent[] {
  return events.map(normalizeTimelineEvent).sort(compareTimelineEvents);
}

export function buildTimeline(...eventGroups: TimelineEvent[][]): TimelineEvent[] {
  return normalizeTimelineEvents(eventGroups.flat());
}

export function getDemoTimeline(): TimelineEvent[] {
  return buildTimeline(
    [
      {
        id: 'validator-active',
        title: 'Validator activity detected',
        description: 'Validator reliability contributed to the wallet reputation model.',
        occurredAt: '2024-06-10T00:00:00.000Z',
        source: 'chain',
      },
      {
        id: 'first-seen',
        title: 'Wallet first observed',
        description: 'Wallet began accumulating public Bittensor ecosystem history.',
        occurredAt: '2023-02-01',
        source: 'chain',
      },
    ],
    [
      {
        id: 'gittensor-contribution',
        title: 'GitTensor contribution recorded',
        description: 'Developer activity was mapped into the passport achievement graph.',
        occurredAt: '2025-09-14T00:00:00.000Z',
        source: 'gittensor',
      },
    ],
  );
}
