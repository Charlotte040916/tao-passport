import type { LeaderboardEntry, ReputationSignal } from '@tao-passport/shared-types';
import { weightedAverage } from '@tao-passport/shared-utils';

export function buildReputationSignals(): ReputationSignal[] {
  return [
    { name: 'Validator reliability', score: 92, weight: 0.3, source: 'chain' },
    { name: 'Miner participation', score: 76, weight: 0.15, source: 'chain' },
    { name: 'Governance activity', score: 88, weight: 0.15, source: 'chain' },
    { name: 'GitTensor contribution', score: 94, weight: 0.25, source: 'gittensor' },
    { name: 'Community signal', score: 87, weight: 0.15, source: 'community' },
  ];
}

export function calculateTrustScore(signals: ReputationSignal[]): number {
  return weightedAverage(signals);
}

export function getDemoLeaderboard(): LeaderboardEntry[] {
  return [
    {
      rank: 1,
      walletAddress: '5FAbc123TAOPassportDemoWalletAddress999999999999',
      label: 'Validator and GitTensor builder',
      trustScore: 95,
    },
    {
      rank: 2,
      walletAddress: '5Fxyz789LongTermSubnetMinerWalletAddress999999999',
      label: 'Long-term subnet miner',
      trustScore: 91,
    },
    {
      rank: 3,
      walletAddress: '5Gdao456GovernanceParticipantWalletAddress99999999',
      label: 'Governance participant',
      trustScore: 88,
    },
  ];
}
