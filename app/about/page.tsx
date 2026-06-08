import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "About the author and this blog.",
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6">
      <article className="py-8">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
          About
        </h1>

        <div className="mt-6 space-y-5 leading-7 text-foreground/90">
          <p>
            {`Hi, I'm a software developer who likes writing about the things I
            build and the lessons I pick up along the way. This blog is a quiet
            corner of the internet for long-form notes on web development,
            design, and shipping.`}
          </p>
          <p>
            Every post here is written in Markdown, stored as plain{" "}
            <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">
              .mdx
            </code>{" "}
            files, and rendered with Next.js. No database, no CMS — just files
            in a folder and a fast static site.
          </p>
          <p>
            {`If something here was useful or you just want to say hello, I'd love
            to hear from you. The best ideas usually start as a conversation.`}
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <h2 className="text-sm font-medium text-foreground">Elsewhere</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                X / Twitter
              </a>
            </li>
          </ul>
        </div>
      </article>
    </main>
  )
}
