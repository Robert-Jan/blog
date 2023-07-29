import matter from "gray-matter";
import fs from "fs";

export type Tag = {
  Name: string;
  Version?: string;
};

export function getAllTags(): { [key: string]: number } {
  const tags: { [key: string]: number } = {};

  fs.readdirSync("blog/articles").forEach((fileName) => {
    const file = fs.readFileSync(`blog/articles/${fileName}`, "utf-8");
    const { data } = matter(file);

    getTagsFromFrontMatter(data.tags)?.forEach((tag) => {
      tags[tag.Name] = tags[tag.Name] ? tags[tag.Name] + 1 : 1;
    });
  });

  return tags;
}

export function getTagsFromFrontMatter(tags: any): Tag[] | null {
  if (!tags) return null;

  return tags
    .map((tag: any) => {
      return {
        Name: tag.tag,
        Version: tag.version ?? null
      };
    })
    .sort((tag: Tag) => tag.Name);
}

export function getAllTagsOrderdByCount(): string[] {
  const tags = Object.entries(getAllTags())
    .sort((a, b) => b[1] - a[1])
    .values();

  const keys: string[] = [];

  for (const key of tags) {
    keys.push(key[0]);
  }

  return keys;
}
