"use client";
import { RefObject, useRef } from "react";

export function AH2(props: HProps): JSX.Element {
  return <Heading as="h2" {...props} />;
}

export function AH3(props: HProps): JSX.Element {
  return <Heading as="h3" {...props} />;
}

export function AH4(props: HProps): JSX.Element {
  return <Heading as="h4" {...props} />;
}

export function AH5(props: HProps): JSX.Element {
  return <Heading as="h5" {...props} />;
}

export function AH6(props: HProps): JSX.Element {
  return <Heading as="h6" {...props} />;
}

function Heading({ as: HeadingElement, children, id, ...rest }: HeadingProps): JSX.Element {
  const ref = useRef<HTMLHeadingElement>(null);
  return (
    <HeadingElement className="group inline-block w-full" id={id} ref={ref} {...rest}>
      {children}
      {id && (
        <>
          {" "}
          <span className="not-prose inline-block">
            <AnchorLink targetId={id} targetRef={ref} />
          </span>
        </>
      )}
    </HeadingElement>
  );
}

export type HProps = React.DetailedHTMLProps<
  React.DetailsHTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

type HeadingProps = HProps & {
  as: "h2" | "h3" | "h4" | "h5" | "h6";
};

function AnchorLink({ targetId, targetRef }: AnchorLinkProps): JSX.Element {
  return (
    <a
      onClick={async (e) => {
        if (!targetRef.current) return;

        e.preventDefault();

        targetRef.current.scrollIntoView({ behavior: "smooth" });
        history.replaceState({}, "", `#${targetId}`);

        await navigator.clipboard.writeText(location.href);
      }}
      className="-mb-2px invisible inline-block align-bottom text-slate-400 hover:text-slate-600 group-hover:visible dark:text-slate-600 dark:hover:text-slate-400"
      href={`#${targetId}`}
      title="Copy link to this section">
      #
    </a>
  );
}

type AnchorLinkProps = {
  targetId: string;
  targetRef: RefObject<Element>;
};
