import fs from "fs";
import { Feed } from "feed";
import { Article } from "@/Articles";

export async function rss(articles: Article[]) {
  const URL = process.env.URL ?? "http://localhost:3000";
  const author = {
    name: "Robert-Jan"
  };

  const feed = new Feed({
    title: "Robert-Jan.dev",
    description: "Lorem ipsum",
    id: URL,
    link: URL,
    image: `${URL}/favicon.ico`,
    favicon: `${URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Robert-Jan`,
    generator: "Generated during NPM build",
    updated: new Date(),
    feedLinks: {
      rss2: `${URL}/rss/feed.xml`,
      json: `${URL}/rss/feed.json`
    },
    author
  });

  articles.forEach((article) => {
    feed.addItem({
      title: article.Title,
      id: article.Slug,
      link: `${URL}/${article.Slug}`,
      description: article.Description,
      author: [author],
      contributor: [author],
      date: new Date(article.Date)
    });
  });

  fs.writeFileSync("public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("public/rss/feed.json", feed.json1());
}
