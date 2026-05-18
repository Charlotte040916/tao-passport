export type ChainWalletSnapshot = {
  walletAddress: string;
  validatorScore: number;
  minerScore: number;
  governanceVotes: number;
  subnetsParticipated: number;
  firstSeenAt: string;
};

export async function getWalletSnapshot(walletAddress: string): Promise<ChainWalletSnapshot> {
  return {
    walletAddress,
    validatorScore: 92,
    minerScore: 76,
    governanceVotes: 14,
    subnetsParticipated: 6,
    firstSeenAt: '2023-02-01T00:00:00.000Z',
  };
}
