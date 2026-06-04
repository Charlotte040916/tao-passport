import type { Achievement } from '@tao-passport/shared-types';

export function AchievementGrid({ achievements }: { achievements: Achievement[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {achievements.map((achievement) => (
        <article key={achievement.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div className="text-3xl">{achievement.icon}</div>
          <h3 className="mt-4 font-semibold text-white">{achievement.name}</h3>
          <p className="mt-2 text-sm text-slate-300">{achievement.description}</p>
          <p className="mt-4 text-xs uppercase tracking-widest text-blue-300">{achievement.category}</p>
        </article>
      ))}
    </section>
  );
}
