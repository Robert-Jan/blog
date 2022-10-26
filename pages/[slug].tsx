import fs from 'fs'
import matter from 'gray-matter'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import md from 'markdown-it'
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { BodySection } from '../components/Article/BodySection'
import { HeadSection } from '../components/Article/HeadSection'
import { anchor, code } from '../lib/Markdown'
import type { Post } from '../lib/Post'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs.readdirSync('resources/posts').map((fileName) => ({
    params: { slug: fileName.replace('.md', '') }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const file = fs.readFileSync(`resources/posts/${params?.slug}.md`, 'utf-8')
  const { data, content } = matter(file)

  const html = md({
    highlight: (str: string, lang: string, attrs: string) => {
      return code(hljs.highlight(str, { language: lang, ignoreIllegals: true }).value, attrs)
    }
  })
    .use(anchor)
    .render(content)

  const words = content.trim().split(/\s+/).length

  const post: Post = {
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
      post
    }
  }
}

export default function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(post)
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div>
        <HeadSection post={post} />
        <BodySection post={post} />
      </div>
    </>
  )
}
