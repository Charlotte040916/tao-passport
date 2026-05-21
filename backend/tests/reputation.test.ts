import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateTrustScore } from '../src/services/reputation/reputationService.js';

test('calculates weighted trust score', () => {
  const score = calculateTrustScore([
    { name: 'A', score: 100, weight: 0.75, source: 'chain' },
    { name: 'B', score: 80, weight: 0.25, source: 'community' },
  ]);

  assert.equal(score, 95);
});
