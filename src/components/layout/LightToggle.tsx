import { Menu } from "@headlessui/react";

export default function LightToggle(): JSX.Element {
  return (
    <Menu>
      <Menu.Button
        aria-label="Toggle dark mode"
        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
        <svg
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-yellow-50 [@media(prefers-color-scheme:dark)]:stroke-yellow-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-yellow-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-yellow-600">
          <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
          <path
            d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
            fill="none"></path>
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-yellow-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-yellow-500">
          <path
            d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
        </svg>
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="dark:highlight-white/5 absolute top-8 z-50 mt-4 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:text-zinc-300 dark:ring-white/10">
        <Menu.Item
          as="li"
          onClick={() => setTheme("light")}
          className="flex cursor-pointer items-center px-2 py-1 dark:hover:bg-zinc-700/30">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6 stroke-zinc-500">
            <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
            <path
              d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
              fill="none"></path>
          </svg>
          Light
        </Menu.Item>
        <Menu.Item
          as="li"
          onClick={() => setTheme("dark")}
          className="flex cursor-pointer items-center px-2 py-1 dark:hover:bg-zinc-700/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-6 w-6 stroke-zinc-500">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          Dark
        </Menu.Item>
        <Menu.Item
          as="li"
          onClick={() => setTheme("system")}
          className="flex cursor-pointer items-center px-2 py-1 dark:hover:bg-zinc-700/30">
          <svg viewBox="0 0 24 24" fill="none" className="mr-2 h-6 w-6">
            <path
              d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
              strokeWidth="1.5"
              strokeLinejoin="round"
              className="stroke-zinc-500"></path>
            <path
              d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-zinc-500"></path>
          </svg>
          System
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

function setTheme(theme: string) {
  if (theme === "dark") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else if (theme === "light") {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.theme = "light";
  } else {
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.remove(prefersDarkTheme ? "light" : "dark");
    document.documentElement.classList.add(prefersDarkTheme ? "dark" : "light");
    delete localStorage.theme;
  }
}
