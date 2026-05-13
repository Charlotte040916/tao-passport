import type { Achievement } from './achievement.js';
import type { ReputationSignal } from './reputation.js';

export type TimelineEvent = {
  id: string;
  title: string;
  description: string;
  occurredAt: string;
  source: 'chain' | 'gittensor' | 'community';
};

export type TaoPassport = {
  walletAddress: string;
  summary: string;
  level: number;
  trustScore: number;
  validatorScore: number;
  minerScore: number;
  communityScore: number;
  yearsActive: number;
  achievements: Achievement[];
  reputationSignals: ReputationSignal[];
  timeline: TimelineEvent[];
};
