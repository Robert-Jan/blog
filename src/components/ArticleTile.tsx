import Link from 'next/link'
import { Article } from '../shared/article'

type ArticleTileProps = {
  article: Article
}

export const ArticleTile = ({ article }: ArticleTileProps) => (
  <article className="relative flex flex-col items-start border-l-4 border-slate-200 pl-5 transition duration-300 hover:border-yellow-500">
    <h2 className="text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100">
      <Link href={article.slug!}>
        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
        <span className="relative z-10">{article.title}</span>
      </Link>
    </h2>
    <time
      className="relative z-10 order-first mb-3 flex items-center text-sm text-slate-400 dark:text-slate-500"
      dateTime={article.date}>
      {new Date(article.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })}
    </time>
    <p className="relative z-10 mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
      {article.description}
    </p>
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-yellow-600">
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
  </article>
)
