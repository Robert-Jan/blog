import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const menu: { name: string; url: string }[] = [
  { name: "About", url: "/about" },
  { name: "Articles", url: "/articles" },
  { name: "Series", url: "/series" }
];

export default function Navigation(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Menu>
        <Menu.Button className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items
            as="ul"
            className="dark:highlight-white/5 absolute top-8 z-50 mt-4 w-48 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:text-zinc-300 dark:ring-white/10 md:w-36">
            <Link href="/">
              <Menu.Item
                as="li"
                className="flex cursor-pointer items-center px-4 py-3 dark:hover:bg-zinc-700/30 md:px-2 md:py-1">
                Home
              </Menu.Item>
            </Link>
            {menu.map((item) => (
              <Link href={item.url} key={item.url}>
                <Menu.Item
                  as="li"
                  className="flex cursor-pointer items-center px-4 py-3 dark:hover:bg-zinc-700/30 md:px-2 md:py-1">
                  {item.name}
                </Menu.Item>
              </Link>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
      <nav className="pointer-events-auto hidden md:block">
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          {menu.map((item) => (
            <li key={item.url}>
              <Link
                href={item.url}
                className="relative block px-3 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400">
                {item.name}
                {router.asPath.includes(item.url) && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/40 to-yellow-500/0 dark:from-yellow-400/0 dark:via-yellow-400/40 dark:to-yellow-400/0"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
