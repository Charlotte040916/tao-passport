export type ReputationSignal = {
  name: string;
  score: number;
  weight: number;
  source: 'chain' | 'gittensor' | 'community' | 'derived';
};

export type LeaderboardEntry = {
  rank: number;
  walletAddress: string;
  label: string;
  trustScore: number;
};
