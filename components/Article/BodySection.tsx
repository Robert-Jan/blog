import { Post } from '../../lib/Post'

type BodySectionProps = {
  post: Post
}

export const BodySection = ({ post }: BodySectionProps) => (
  <article className="mx-auto max-w-4xl">
    <div
      dangerouslySetInnerHTML={{ __html: post.html }}
      className="prose prose-slate mx-auto mt-8 max-w-none dark:prose-invert"
    />
  </article>
)
