import Image from 'next/image'
import Link from 'next/link'
import { Article } from '../../shared/article'

type HeadSectionProps = {
  article: Article
}

export const HeadSection = ({ article }: HeadSectionProps) => (
  <>
    <div className="bg-zinc-100 dark:bg-zinc-800">
      <div className="mx-auto max-w-4xl">
        <div className="pb-4 pt-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
            {article.title}
          </h1>
        </div>
        <div className="pb-4">
          {article.tags?.map((tag: string) => (
            <Link
              href={'/articles/' + tag}
              key={tag}
              className="mr-2 rounded-full bg-zinc-300 py-1 px-3">
              {tag}
            </Link>
          ))}
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
      <div className="mt-6 flex items-center text-base text-slate-400 dark:text-slate-500">
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
