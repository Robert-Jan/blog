import Navigation from "./Navigation";
import LightToggle from "./LightToggle";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className="relative flex w-full gap-3 px-4 py-8 sm:px-8 md:gap-4 lg:px-20">
      <div className="flex flex-1">
        <Link href="/" className="whitespace-nowrap">
          <span
            className="inline text-3xl font-black tracking-tight text-slate-400"
            style={{
              backgroundImage: "-webkit-linear-gradient(45deg, #EA4798, #CA8A04)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
            Robert-Jan
          </span>
          <span className="inline text-3xl font-black tracking-tight text-slate-300 dark:text-slate-600">
            .dev
          </span>
        </Link>
      </div>
      <div className="relative flex flex-1 justify-end md:justify-center">
        <Navigation />
      </div>
      <div className="relative flex justify-end md:flex-1">
        <LightToggle />
      </div>
    </header>
  );
}
