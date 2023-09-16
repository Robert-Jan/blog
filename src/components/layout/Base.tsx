import Head from "next/head";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Base({ children }: LayoutProps): JSX.Element {
  return (
    <div className="container mx-auto min-h-screen max-w-6xl bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
      <Head>
        <title>Robert-Jan.dev</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
