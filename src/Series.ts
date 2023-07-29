import matter from "gray-matter";
import fs from "fs";

export type Serie = {
  Title: string;
  Content: string;
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

        return {
          Title: data.title,
          Content: content
        };
      })
      // Sort by serie title in descending order.
      .sort((a, b) => b.Title)
  );
}
