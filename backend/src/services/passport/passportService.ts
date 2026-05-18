import type { TaoPassport } from '@tao-passport/shared-types';
import { getWalletSnapshot } from '../../blockchain/bittensor/client.js';
import { getDemoAchievements } from '../achievements/achievementService.js';
import { buildReputationSignals, calculateTrustScore } from '../reputation/reputationService.js';
import { getDemoTimeline } from '../timeline/timelineService.js';

export async function buildPassport(walletAddress: string): Promise<TaoPassport> {
  const snapshot = await getWalletSnapshot(walletAddress);
  const reputationSignals = buildReputationSignals();

  return {
    walletAddress,
    summary: 'Experienced Bittensor participant with validator operations, governance activity, and GitTensor builder signals.',
    level: 18,
    trustScore: calculateTrustScore(reputationSignals),
    validatorScore: snapshot.validatorScore,
    minerScore: snapshot.minerScore,
    communityScore: 87,
    yearsActive: 2.4,
    achievements: getDemoAchievements(),
    reputationSignals,
    timeline: getDemoTimeline(),
  };
}
