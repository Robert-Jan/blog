import type { AppProps } from "next/app";
import "../../tailwind.css";
import Base from "@/components/layout/Base";

export default function Blog({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Base>
        <Component {...pageProps} />
      </Base>
    </>
  );
}
