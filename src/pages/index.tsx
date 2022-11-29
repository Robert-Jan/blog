import fs from 'fs'
import matter from 'gray-matter'
import type { InferGetStaticPropsType } from 'next'
import { ArticleTile } from '../components/ArticleTile'
import { LatestArticleBottom, LatestArticleTop } from '../components/LatestArticle'
import type { Article } from '../shared/article'

export const getStaticProps = async () => {
  const files = fs.readdirSync('blog/articles')

  const articles: Article[] = files.slice(0, 4).map((fileName) => {
    const file = fs.readFileSync(`blog/articles/${fileName}`, 'utf-8')
    const { data } = matter(file)

    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      slug: fileName.replace('.md', ''),
      date: data.date.toISOString(),
      tags: data.tags,
      hero: data.hero ?? null,
      heroCredits: data.heroCredits ?? null
    }
  })

  return {
    props: {
      articles
    }
  }
}

export default function Home({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="bg-zinc-100 dark:bg-zinc-800">
        <div className="mx-auto flex max-w-5xl py-16">
          <div className="w-3/5 pr-12">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 sm:text-7xl sm:leading-none">
              My ramblings about software
            </h1>
            <p className="-mb-6 pt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              I’m Spencer, a software designer and entrepreneur based in New York City. I’m the
              founder and CEO of Planetaria, where we develop technologies that empower regular
              people to explore space on their own terms. I’ve loved making things for as long as I
              can remember, and wrote my first program.
            </p>
          </div>
          <div className="w-2/5">
            <LatestArticleTop article={articles[0]} />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl md:flex-row-reverse">
        <div className="w-2/5">
          <LatestArticleBottom article={articles[0]} />
          <div className="relative mt-8 rounded-lg bg-white p-6 drop-shadow-xl">Test</div>
        </div>
        <div className="w-3/5 pr-12">
          <h2 className="pt-6 pb-6 text-2xl font-semibold">More articles</h2>
          <div className="flex flex-col gap-8">
            {articles.slice(1).map((article: Article) => (
              <ArticleTile key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
