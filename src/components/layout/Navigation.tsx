import Link from "next/link";
import { useRouter } from "next/router";

export const menu: { name: string; url: string }[] = [
  { name: "About", url: "/about" },
  { name: "Articles", url: "/articles" },
  { name: "Series", url: "/series" }
];

export default function Navigation(): JSX.Element {
  const router = useRouter();

  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {menu.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              className="relative block px-3 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400">
              {item.name}
              {router.pathname == item.url && (
                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/40 to-yellow-500/0 dark:from-yellow-400/0 dark:via-yellow-400/40 dark:to-yellow-400/0"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
