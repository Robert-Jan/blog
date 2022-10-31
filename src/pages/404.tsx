export default function NotFound() {
  return (
    <div className="mx-auto max-w-screen-xl pt-8 lg:pt-16">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-slate-600 dark:text-slate-500 lg:text-9xl">
          404
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          Something&rsquo;s missing.
        </p>
        <p className="text-lg font-light text-slate-500 dark:text-slate-400">
          Sorry, we can&rsquo;t find that page. You&rsquo;ll find lots to explore on the homepage.
        </p>
      </div>
    </div>
  )
}
