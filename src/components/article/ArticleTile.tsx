import { Article } from "@/Articles";
import Link from "next/link";

export type ArticleTileProps = {
  article: Article;
};

export function ArticleTile({ article }: ArticleTileProps): JSX.Element {
  return (
    <Link
      href={"/" + encodeURIComponent(article.Slug)}
      className="w-full rounded-2xl border border-zinc-100 p-6 transition-colors hover:bg-neutral-100/50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/20">
      <h3 className="text-xl font-bold">{article.Title}</h3>
      <time dateTime={article.Date} className="mt-3 text-sm">
        {new Date(article.Date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric"
        })}
      </time>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {article.Description}
      </p>
      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center text-sm font-medium text-yellow-500">
        Read article
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="ml-1 h-4 w-4 stroke-current">
          <path
            d="M6.75 5.75 9.25 8l-2.5 2.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
        </svg>
      </div>
    </Link>
  );
}
