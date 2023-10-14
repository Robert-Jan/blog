import Link from "next/link";
import { menu } from "./Navigation";

export default function Footer(): JSX.Element {
  return (
    <footer className="mx-auto mt-24 flex border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-300/20">
      <div className="flex w-full flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-8 lg:px-20">
        <div className="flex flex-col gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200 sm:flex-row">
          {menu.map((item) => (
            <Link
              key={item.url}
              href={{ pathname: item.url }}
              className="text-center transition hover:text-yellow-500 dark:hover:text-yellow-400 sm:text-left">
              {item.name}
            </Link>
          ))}
          <Link
            href="https://analytics.umami.is/share/JNJEuYObvZIxbV66/Blog"
            target="_blank"
            className="text-center transition hover:text-yellow-500 dark:hover:text-yellow-400 sm:text-left">
            Analytics
          </Link>
          <div className="text-center sm:text-left">
            Feeds:{" "}
            <Link
              href="/rss/feed.json"
              target="_blank"
              className="transition hover:text-yellow-500 dark:hover:text-yellow-400">
              JSON
            </Link>
            /
            <Link
              href="/rss/feed.xml"
              target="_blank"
              className="transition hover:text-yellow-500 dark:hover:text-yellow-400">
              XML
            </Link>
          </div>
        </div>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} robert-jan.dev
        </p>
      </div>
    </footer>
  );
}
