import Link from "next/link";
import { menu } from "./Navigation";

export default function Footer(): JSX.Element {
  return (
    <footer className="mx-auto mt-24 flex border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-300/20">
      <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row lg:px-20">
        <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {menu.map((item) => (
            <Link
              key={item.url}
              href={{ pathname: item.url }}
              className="transition hover:text-yellow-500 dark:hover:text-yellow-400">
              {item.name}
            </Link>
          ))}
            <Link
              href="https://analytics.umami.is/share/JNJEuYObvZIxbV66/Blog"
              target="_blank"
              className="transition hover:text-yellow-500 dark:hover:text-yellow-400">
              Analytics
            </Link>
        </div>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} robert-jan.dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
