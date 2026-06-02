import type { ReputationSignal } from '@tao-passport/shared-types';

export function TrustBreakdown({ signals }: { signals: ReputationSignal[] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-xl font-semibold text-white">Reputation Signals</h2>
      <div className="mt-5 space-y-4">
        {signals.map((signal) => (
          <div key={signal.name}>
            <div className="flex justify-between text-sm">
              <span className="text-slate-200">{signal.name}</span>
              <span className="text-blue-200">{signal.score}/100</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-800">
              <div className="h-2 rounded-full bg-emerald-400" style={{ width: `${signal.score}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
