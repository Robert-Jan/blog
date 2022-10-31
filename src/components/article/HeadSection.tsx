import Image from 'next/image'
import { Article } from '../../shared/article'

type HeadSectionProps = {
  article: Article
}

export const HeadSection = ({ article }: HeadSectionProps) => (
  <>
    <div className="bg-zinc-100 dark:bg-slate-800">
      <div className="mx-auto max-w-4xl">
        <div className="pb-8 pt-6">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            {article.title}
          </h1>
        </div>
        {article.hero && <div className="h-48" /* Placeholder for hero image overlap */ />}
      </div>
    </div>
    <div className="mx-auto max-w-4xl">
      {article.hero && (
        <div className="relative -mt-48 h-96 w-full overflow-hidden rounded drop-shadow-xl">
          <Image
            src={article.hero}
            alt={article.heroCredits!}
            title={article.heroCredits}
            className="object-cover dark:brightness-75"
            fill
          />
        </div>
      )}
      <div className="mt-6 flex items-center text-base text-zinc-400 dark:text-zinc-500">
        <>
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </time>
          <span className="px-2">&middot;</span>
          {article.readingTime} minute read
        </>
      </div>
    </div>
  </>
)
