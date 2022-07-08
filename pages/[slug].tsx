import fs from 'fs'
import matter from 'gray-matter'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import md from 'markdown-it'
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { anchor, code } from '../lib/Markdown'
import type { Post } from '../lib/Post'
import { toc } from '../lib/Toc'

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

  const post: Post = {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    date: JSON.stringify(data.date),
    tags: data.tags,
    html: html,
    toc: data.toc ? toc(html) : []
  }

  return {
    props: {
      post
    }
  }
}

export default function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div>
        Post
        <div dangerouslySetInnerHTML={{ __html: post.html }} className="prose max-w-none" />
      </div>
    </>
  )
}
