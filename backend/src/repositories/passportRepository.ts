import type { TaoPassport } from '@tao-passport/shared-types';
import { buildPassport } from '../services/passport/passportService.js';

export const sampleWalletAddress = '5FAbc123TAOPassportDemoWalletAddress999999999999';

export async function findPassport(walletAddress: string): Promise<TaoPassport> {
  return buildPassport(walletAddress);
}
