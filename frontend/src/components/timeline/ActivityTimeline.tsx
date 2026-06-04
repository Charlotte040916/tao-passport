import type { TimelineEvent } from '@tao-passport/shared-types';

export function ActivityTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-xl font-semibold text-white">Wallet History</h2>
      <div className="mt-5 space-y-5">
        {events.map((event) => (
          <article key={event.id} className="border-l border-blue-400/40 pl-4">
            <p className="text-sm text-blue-200">{new Date(event.occurredAt).toLocaleDateString()}</p>
            <h3 className="mt-1 font-semibold text-white">{event.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{event.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
