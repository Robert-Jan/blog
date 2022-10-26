import Link from 'next/link'
import { menu } from './Header'

export const Footer = () => (
  <footer className="mx-auto mt-24 flex max-w-5xl border-t border-slate-200 pt-10 pb-16 dark:border-slate-700/40">
    <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
      <div className="flex gap-6 text-sm font-medium text-slate-800 dark:text-slate-200">
        {menu.map((item) => (
          <Link
            key={item.url}
            href={{ pathname: item.url }}
            className="transition hover:text-yellow-500 dark:hover:text-yellow-400">
            {item.name}
          </Link>
        ))}
      </div>
      <p className="text-sm text-slate-400 dark:text-slate-500">
        © {new Date().getFullYear()} robert-jan.dev. All rights reserved.
      </p>
    </div>
  </footer>
)
