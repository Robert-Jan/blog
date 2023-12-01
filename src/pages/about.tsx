import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type Certification = {
  Title: string;
  Subtitle: string;
  StartYear: number;
  EndYear?: number;
  Logo: string;
  Link: string;
};

const certifications: Certification[] = [
  {
    Title: "Microsoft Azure Fundamentals",
    Subtitle: "AZ-900",
    StartYear: 2023,
    Logo: "/images/azure.png",
    Link: "https://learn.microsoft.com/en-us/users/robert-jan/credentials/41c9d14a57cccc09"
  }
];

export default function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>About · Robert-Jan.dev</title>
      </Head>
      <div className="mx-auto px-4 pt-6 sm:px-8 sm:pt-12 lg:px-20">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="relative h-96 w-full rounded-2xl drop-shadow-xl">
              <Image
                src="/images/avatar.webp"
                alt="Avatar of me"
                className="rounded-2xl object-cover"
                fill
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-tight">
              I’m{" "}
              <span
                style={{
                  backgroundImage: "-webkit-linear-gradient(45deg, #EA4798, #CA8A04)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                Robert-Jan
              </span>
              , a passionate developer on a adventure.
            </h1>
            <p className="pt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              My adventure started when I was a little boy and joined my dad to the office to pick
              up his new laptop. When we walked onto the floor where the service desk was located, I
              was in awe of all the computers and servers that were scattered all over. At that
              moment I knew that when I grew up, I wanted to work at a place those like that. My
              excitement went through the roof when I got one of the old laptops laying around there
              to tinker around with. From there on out I was busy with the computer every day.
            </p>
            <p className="pt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Jumping ahead a couple of years, I found myself with an abundance of free time during
              my secondary vocational education (MBO). This led me to partner with a classmate and
              launch our own business, where we developed websites, mobile apps, and various
              applications for a diverse clientele, utilizing technologies such as PHP + Laravel and
              JavaScript. Following this venture, I joined a startup, where the primary focus was
              the creation of a social URL sharing platform. In my evening hours i studied for my
              bachelor&apos;s degree in software development at the NOVI university of applied
              sciences (HBO).
            </p>
            <p className="pt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              I decided to change gears and switch from job and programming language to the realm of
              C#, .NET, and Azure. At my current job, a large international dredging company, I use
              those tools daily to create a variety of applications. This is where I continue my
              adventure this very day diving into the world of Artificial Intelligence and IoT.
            </p>
          </div>
          <div className="lg:pl-20">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                <span className="ml-3 mt-0.5">Certifications</span>
              </h2>
              <ol className="mt-6 space-y-4">
                {certifications.map((certification: Certification) => (
                  <li className="flex gap-4" key={certification.Title}>
                    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <Image
                        alt="Azure logo"
                        loading="lazy"
                        width="32"
                        height="32"
                        decoding="async"
                        data-nimg="1"
                        className="h-7 w-7 rounded-full"
                        src={certification.Logo}
                      />
                    </div>
                    <dl className="flex flex-auto flex-wrap gap-x-2">
                      <Link
                        href={certification.Link}
                        target="_blank"
                        className="w-full flex-none text-sm font-medium text-zinc-900 transition hover:text-yellow-500 dark:text-zinc-100 dark:hover:text-yellow-400">
                        {certification.Title}
                      </Link>
                      <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                        {certification.Subtitle}
                      </dd>
                      <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                        <time dateTime={certification.StartYear.toString()}>
                          {certification.StartYear}
                        </time>
                        {certification.EndYear && (
                          <>
                            {" "}
                            <span aria-hidden="true">—</span>{" "}
                            <time dateTime={certification.EndYear?.toString()}>
                              {certification.EndYear}
                            </time>
                          </>
                        )}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
