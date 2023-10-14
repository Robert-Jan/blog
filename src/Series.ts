import matter from "gray-matter";
import fs from "fs";
import { Article, getArticles } from "./Articles";

export type Serie = {
  Title: string;
  Content: string;
  Articles: Article[];
  Image?: string;
  ImageCredits?: string;
};

export function getSeries(): Serie[] {
  const files = fs.readdirSync("blog/series");

  return (
    files
      // Get the files from the filesystem and read the front matter data into the Serie type.
      .map((fileName) => {
        const file = fs.readFileSync(`blog/series/${fileName}`, "utf-8");
        const { data, content } = matter(file);

        const articles = getArticles()
          .filter((article) => article.Series == fileName.replace(".md", ""))
          .sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());

        return {
          Title: data.title,
          Content: content,
          Articles: articles,
          Image: data.image,
          ImageCredits: data.imageCredits
        };
      })
      // Sort by serie title in descending order.
      .sort((a, b) => b.Title)
  );
}

export function getSerieBySlug(slug: String): Serie {
  const file = fs.readFileSync(`blog/series/${slug}.md`, "utf-8");
  const { data, content } = matter(file);

  const articles = getArticles()
    .filter((article) => article.Series == slug)
    .sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());

  return {
    Title: data.title,
    Content: content,
    Articles: articles,
    Image: data.image,
    ImageCredits: data.imageCredits
  };
}
