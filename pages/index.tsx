import fs from 'fs'
import matter from 'gray-matter'
import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import type { Post } from '../lib/Post'

export const getStaticProps = async () => {
  const files = fs.readdirSync('resources/posts')

  const posts: Post[] = files.slice(0, 12).map((fileName) => {
    const file = fs.readFileSync(`resources/posts/${fileName}`, 'utf-8')
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
      posts
    }
  }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      {posts.map((post) => (
        <Link href={{ pathname: post.slug }} key={post.slug}>
          {post.title}
        </Link>
      ))}
    </div>
  )
}
