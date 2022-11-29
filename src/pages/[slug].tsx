import fs from 'fs'
import matter from 'gray-matter'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import md from 'markdown-it'
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { BodySection } from '../components/article/BodySection'
import { HeadSection } from '../components/article/HeadSection'
import type { Article } from '../shared/article'
import { anchor, code } from '../shared/Markdown'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs.readdirSync('blog/articles').map((fileName) => ({
    params: { slug: fileName.replace('.md', '') }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const file = fs.readFileSync(`blog/articles/${params?.slug}.md`, 'utf-8')
  const { data, content } = matter(file)

  const html = md({
    highlight: (str: string, lang: string, attrs: string) => {
      return code(hljs.highlight(str, { language: lang, ignoreIllegals: true }).value, attrs)
    }
  })
    .use(anchor)
    .render(content)

  const words = content.trim().split(/\s+/).length

  const article: Article = {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    date: data.date.toISOString(),
    tags: data.tags,
    html: html,
    hero: data.hero ?? null,
    heroCredits: data.heroCredits ?? null,
    readingTime: Math.ceil(words / 225)
  }

  return {
    props: {
      article
    }
  }
}

export default function article({ article }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div>
        <HeadSection article={article} />
        <BodySection article={article} />
      </div>
    </>
  )
}
