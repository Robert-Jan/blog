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
    <div className="flex w-full flex-col gap-8 sm:flex-row">
      {serie.Image && serie.ImageCredits && (
        <div className="relative h-48 w-full flex-none rounded-2xl drop-shadow-xl sm:w-48">
          <Image
            src={serie.Image}
            alt={serie.ImageCredits}
            title={serie.ImageCredits}
            className="rounded-2xl object-cover"
            fill
          />
        </div>
      )}
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">{serie.Title}</h3>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {serie.Content}
        </p>
        <div className="mt-3 flex flex-col divide-y dark:divide-zinc-700/40">
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
