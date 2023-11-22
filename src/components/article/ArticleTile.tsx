import { Article } from "@/Articles";
import { cn } from "@/Classnames";
import Image from "next/image";
import Link from "next/link";

export type ArticleTileProps = {
  article: Article;
  hero?: boolean;
  className?: string;
};

export function ArticleTile({ article, hero, className }: ArticleTileProps): JSX.Element {
  return (
    <Link
      href={"/" + encodeURIComponent(article.Slug)}
      className={cn(
        "flex w-full flex-col rounded-2xl border border-zinc-100 p-6 transition-colors hover:bg-neutral-100/50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/20 md:flex-row",
        className
      )}>
      {hero && article.Hero && (
        <div className="relative mb-4 mr-6 h-48 w-full flex-none rounded-2xl drop-shadow-xl md:mb-0 md:h-full md:w-72 lg:w-96">
          <Image
            src={article.Hero}
            alt={article.HeroCredits!}
            title={article.HeroCredits}
            className="rounded-2xl object-cover"
            fill
          />
        </div>
      )}
      <div>
        <h3 className={cn("font-bold", { "mb-3 text-3xl": hero, "text-xl": !hero })}>
          {article.Title}
        </h3>
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
      </div>
    </Link>
  );
}
