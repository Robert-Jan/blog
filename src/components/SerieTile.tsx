import { Article } from "@/Articles";
import { cn } from "@/Classnames";
import { Serie } from "@/Series";
import Image from "next/image";
import Link from "next/link";

export type SerieTileProps = {
  serie: Serie;
  selected?: String;
};

export function SerieTile({ serie, selected }: SerieTileProps): JSX.Element {
  return (
    <div className="flex w-full gap-x-8">
      <div className="relative h-48 w-48 flex-none rounded-2xl drop-shadow-xl">
        <Image
          src="/images/avatar.webp"
          alt="Avatar of me"
          className="rounded-2xl object-cover"
          fill
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">{serie.Title}</h3>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {serie.Content}
        </p>
        <div className="mt-3 flex flex-col divide-y">
          {serie.Articles.map((article: Article, index: number) => (
            <Link
              key={article.Slug}
              href={"/" + encodeURIComponent(article.Slug)}
              className={cn("py-1 transition-all hover:text-yellow-500", {
                "text-yellow-500": selected != undefined && article.Slug == selected
              })}>
              {index + 1}. {article.Title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
