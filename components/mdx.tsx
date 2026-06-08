import { MDXRemote } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import { getSingletonHighlighter } from "shiki"
import type { ComponentProps } from "react"

const prettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
  getHighlighter: () =>
    getSingletonHighlighter({
      themes: ["github-dark", "github-light"],
      langs: ["typescript", "javascript", "tsx", "jsx", "bash", "json", "css", "html", "markdown"],
    }),
}

const components = {
  h1: (props: ComponentProps<"h1">) => (
    <h1
      className="mt-10 scroll-mt-20 text-2xl font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="mt-10 scroll-mt-20 text-xl font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="mt-8 scroll-mt-20 text-lg font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mt-5 leading-7 text-foreground/90" {...props} />
  ),
  a: (props: ComponentProps<"a">) => (
    <a
      className="font-medium text-foreground underline underline-offset-4 decoration-muted-foreground/40 transition-colors hover:decoration-foreground"
      {...props}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-foreground/90" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-6 text-foreground/90"
      {...props}
    />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="leading-7" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="mt-6 border-l-2 border-border pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <hr className="my-10 border-border" {...props} />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="mt-6 overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 text-sm leading-relaxed [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    />
  ),
}

export function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
        },
      }}
    />
  )
}
