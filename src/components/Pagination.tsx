import Link from "next/link";
import { UrlObject } from "url";
import { NextRouter, useRouter } from "next/router";
import { cn } from "@/Classnames";

export type PaginationProps = {
  currentPage: number;
  maxPage: number;
  queryName: string;
  queryLevel: number;
};

function link(router: NextRouter, queryName: string, queryLevel: number, page: number): UrlObject {
  const urlObject = {
    pathname: router.pathname,
    query: { ...router.query }
  };

  // Check if the query segment exits and if the page parameter is present. If so we will replace the last query parameter.
  if (router.query[queryName] && Object.keys(router.query[queryName]!).length >= queryLevel) {
    const query = [...router.query[queryName]!];
    query[query.length - 1] = page.toString();
    urlObject.query[queryName] = query;
  }
  // A query string exists but the page paramter is not present so we will add them to the end of the array.
  else if (queryLevel > 1) {
    const query = [...router.query[queryName]!];
    query[query.length] = page.toString();
    urlObject.query[queryName] = query;
  }
  // If no query parameters exists we will create a new array with the page.
  else {
    urlObject.query[queryName] = [page.toString()];
  }

  return urlObject;
}

export function Pagination({
  currentPage,
  maxPage,
  queryName,
  queryLevel
}: PaginationProps): JSX.Element {
  const router = useRouter();

  return (
    <nav className="flex w-full justify-around">
      {maxPage > 1 && (
        <ul className="list-style-none flex">
          {currentPage != 1 && (
            <li>
              <Link
                href={link(router, queryName, queryLevel, Number(currentPage) - 1)}
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-zinc-800/20 dark:hover:text-white">
                Previous
              </Link>
            </li>
          )}
          {[...Array(maxPage)].map((e, i) => (
            <li key={i}>
              <Link
                href={link(router, queryName, queryLevel, i + 1)}
                className={cn(
                  "relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-zinc-800/20 dark:hover:text-white",
                  {
                    "text-yellow-500": i + 1 == Number(currentPage),
                    "text-neutral-600 dark:text-white": i + 1 != Number(currentPage)
                  }
                )}>
                {i + 1}
              </Link>
            </li>
          ))}
          {currentPage != maxPage && (
            <li>
              <Link
                href={link(router, queryName, queryLevel, Number(currentPage) + 1)}
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-zinc-800/20 dark:hover:text-white">
                Next
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}
