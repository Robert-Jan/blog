import Link from "next/link";

export type TagPillProps = {
  tag: string;
  version?: string;
};

export function TagPill({ tag, version }: TagPillProps): JSX.Element {
  return (
    <Link
      href={"/articles/tag/" + encodeURIComponent(tag)}
      className="group rounded-full border border-zinc-900/5 bg-zinc-100/40 px-4 py-1 text-zinc-500 shadow-md shadow-zinc-800/5 transition hover:text-yellow-500  dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:text-yellow-400 dark:hover:ring-white/20">
      {tag}
      {version && (
        <span className="text-zinc-400 transition group-hover:text-yellow-500 dark:text-zinc-600 dark:group-hover:text-yellow-400">
          {" "}
          {version}
        </span>
      )}
    </Link>
  );
}
