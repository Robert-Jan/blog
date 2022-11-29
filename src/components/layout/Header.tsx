import Link from 'next/link'
import { LightToggle } from '../LightToggle'

export const menu: { name: string; url: string }[] = [
  { name: 'About', url: '/about' },
  { name: 'Articles', url: '/articles' },
  { name: 'Series', url: '/series' }
]

export const Header = () => (
  <header className="pointer-events-none bg-zinc-100 dark:bg-zinc-800">
    <div className="mx-auto flex max-w-5xl gap-4 pt-6 pb-12">
      <div className="pointer-events-auto flex-1">
        <Link href="/">
          <span
            className="inline text-3xl font-black tracking-tight text-slate-400"
            style={{
              backgroundImage: '-webkit-linear-gradient(45deg, #EA4798, #CA8A04)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            Robert-Jan
          </span>
          <span className="inline text-3xl font-black tracking-tight text-slate-300 dark:text-slate-600">
            .dev
          </span>
        </Link>
      </div>
      <nav className="pointer-events-auto block">
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-slate-800 shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-slate-200 dark:ring-white/10">
          {menu.map((item) => (
            <li key={item.url}>
              <Link
                href={{ pathname: item.url }}
                className="relative block px-3 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400">
                {item.name}
                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/40 to-yellow-500/0 dark:from-yellow-400/0 dark:via-yellow-400/40 dark:to-yellow-400/0"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="pointer-events-auto relative flex flex-1 justify-end">
        <LightToggle />
      </div>
    </div>
  </header>
)
