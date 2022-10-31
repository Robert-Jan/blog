import fs from 'fs'
import matter from 'gray-matter'
import type { InferGetStaticPropsType } from 'next'
import type { Article } from '../shared/article'

export const getStaticProps = async () => {
  const files = fs.readdirSync('blog/articles')

  const articles: Article[] = files.slice(0, 12).map((fileName) => {
    const file = fs.readFileSync(`blog/articles/${fileName}`, 'utf-8')
    const { data } = matter(file)

    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      slug: fileName.replace('.md', ''),
      date: JSON.stringify(data.date),
      tags: data.tags
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
      <div className="bg-zinc-100 dark:bg-slate-800">
        <div className="mx-auto max-w-5xl py-16">
          <div className="w-2/3">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-tight">
              Passionate developer
            </h1>
            <p className="pt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              I’m Spencer, a software designer and entrepreneur based in New York City. I’m the
              founder and CEO of Planetaria, where we develop technologies that empower regular
              people to explore space on their own terms.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
