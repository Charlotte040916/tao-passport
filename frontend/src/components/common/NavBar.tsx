import type { PageKey } from '../../types/navigation';

type NavBarProps = {
  activePage: PageKey;
  onNavigate: (page: PageKey) => void;
};

const links: Array<{ key: PageKey; label: string }> = [
  { key: 'home', label: 'Home' },
  { key: 'passport', label: 'Passport' },
  { key: 'leaderboard', label: 'Leaderboard' },
  { key: 'search', label: 'Search' },
];

export function NavBar({ activePage, onNavigate }: NavBarProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button className="flex items-center gap-3 text-left" onClick={() => onNavigate('home')}>
          <img src="/tao-passport.svg" alt="TAO Passport" className="h-10 w-10" />
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-blue-300">TAO</p>
            <h1 className="text-xl font-semibold text-white">Passport</h1>
          </div>
        </button>
        <div className="flex gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          {links.map((link) => (
            <button
              key={link.key}
              onClick={() => onNavigate(link.key)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activePage === link.key ? 'bg-blue-500 text-white' : 'text-slate-300 hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
