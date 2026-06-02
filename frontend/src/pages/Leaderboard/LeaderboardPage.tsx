import type { LeaderboardEntry } from '@tao-passport/shared-types';
import { shortenWallet } from '../../services/wallet';
import { scoreColor } from '../../utils/score';

export function LeaderboardPage({ entries }: { entries: LeaderboardEntry[] }) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold text-white">Trusted TAO Wallets</h1>
      <p className="mt-3 text-slate-300">Starter leaderboard showing how high-signal wallets can be discovered.</p>
      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
        {entries.map((entry) => (
          <div key={entry.walletAddress} className="grid grid-cols-[64px_1fr_120px] items-center gap-4 border-b border-white/10 px-5 py-4 last:border-b-0">
            <div className="text-2xl font-black text-blue-200">#{entry.rank}</div>
            <div>
              <p className="font-semibold text-white">{shortenWallet(entry.walletAddress)}</p>
              <p className="text-sm text-slate-300">{entry.label}</p>
            </div>
            <div className={`text-right text-2xl font-bold ${scoreColor(entry.trustScore)}`}>{entry.trustScore}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
