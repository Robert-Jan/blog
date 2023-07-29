import matter from "gray-matter";
import { Tag, getTagsFromFrontMatter } from "./Tags";
import fs from "fs";

export type Article = {
  Title: string;
  Description: string;
  Slug: string;
  Date: string;
  Tags: Tag[] | null;
  Content?: string;
  Hero?: string;
  ReadingTime?: number;
};

export function getArticles(): Article[] {
  const files = fs.readdirSync("blog/articles");
  const now = Date.now();

  return (
    files
      // Get the files from the filesystem and read the front matter data into the Article type.
      .map((fileName) => {
        const file = fs.readFileSync(`blog/articles/${fileName}`, "utf-8");
        const { data } = matter(file);

        return {
          Title: data.title,
          Description: data.description,
          Slug: fileName.replace(".md", ""),
          Date: data.date.toISOString(),
          Tags: getTagsFromFrontMatter(data.tags)
        };
      })
      // Remove articles where the date is set in the future.
      .filter((article) => new Date(article.Date).getTime() < now)
      // Sort by article date in descending order.
      .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
  );
}

export function getArticlesPaginated(page: number, perPage = 5): Article[] {
  var start = (page - 1) * perPage;
  var end = start + perPage;

  return getArticles().slice(start, end);
}

export function getTotalPages(perPage = 5): number {
  return Math.ceil(getArticles().length / perPage);
}

export function getArticlesByTag(tag: string): Article[] {
  return (
    getArticles()
      // Get all articles that contain the given tag.
      .filter((article) => article.Tags?.some((t) => t.Name == tag))
  );
}

export function getArticlesByTagPaginated(tag: string, page: number, perPage = 5): Article[] {
  var start = (page - 1) * perPage;
  var end = start + perPage;

  return getArticlesByTag(tag).slice(start, end);
}

export function getTotalPagesByTag(tag: string, perPage = 5): number {
  return Math.ceil(getArticlesByTag(tag).length / perPage);
}

export function getArticle(slug: string): Article {
  const file = fs.readFileSync(`blog/articles/${slug}.md`, "utf-8");
  const { data, content } = matter(file);

  const words = content.trim().split(/\s+/).length;

  return {
    Title: data.title,
    Description: data.description,
    Slug: slug,
    Date: data.date.toISOString(),
    Tags: getTagsFromFrontMatter(data.tags),
    Content: content,
    Hero: data.hero ?? null,
    ReadingTime: Math.ceil(words / 225)
  };
}
