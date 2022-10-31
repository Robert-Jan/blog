import { Article } from '../../shared/article'

type BodySectionProps = {
  article: Article
}

export const BodySection = ({ article }: BodySectionProps) => (
  <article className="mx-auto max-w-4xl">
    <div
      dangerouslySetInnerHTML={{ __html: article.html! }}
      className="prose prose-slate mx-auto mt-8 max-w-none dark:prose-invert"
    />
  </article>
)
