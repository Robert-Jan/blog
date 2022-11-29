import Image from 'next/image'
import Link from 'next/link'
import { Article } from '../shared/article'

type LatestArticleProps = {
  article: Article
}

export const LatestArticleTop = ({ article }: LatestArticleProps) => (
  <div className="relative -mb-16 h-80 w-full rounded-t-lg bg-white drop-shadow-xl">
    <Image
      src={article.hero!}
      alt={article.heroCredits!}
      className="rounded-t-lg object-cover"
      fill
    />
    <div
      className="absolute bottom-0 w-full px-6 py-4"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.65)' }}>
      <Link href={article.slug!}>
        <span className="absolute inset-0 z-20"></span>
        <h3 className="text-xl font-semibold leading-tight tracking-tight">
          <span className="font-bold text-yellow-600">Latest:</span> {article.title}
        </h3>
      </Link>
    </div>
  </div>
)

export const LatestArticleBottom = ({ article }: LatestArticleProps) => (
  <div className="relative rounded-b-lg bg-white p-6 drop-shadow-xl">
    <span className="text-sm text-slate-400">
      <time dateTime={article.date}>
        {new Date(article.date).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </time>
    </span>
    <Link href={article.slug!}>
      <span className="absolute inset-0 z-20"></span>
      <p className="pt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {article.description}
      </p>
    </Link>
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-yellow-600">
      Read article
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-5 w-5 stroke-current">
        <path
          d="M6.75 5.75 9.25 8l-2.5 2.25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>
    </div>
  </div>
)
