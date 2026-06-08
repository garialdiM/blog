import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { Mdx } from "@/components/mdx"
import { GiscusComments } from "@/components/giscus-comments"
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts"

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <main className="mx-auto max-w-2xl px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 py-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to writing
      </Link>

      <article className="py-6">
        <header className="mb-2">
          <time
            dateTime={post.date}
            className="font-mono text-xs uppercase tracking-wide text-muted-foreground"
          >
            {formatDate(post.date)}
          </time>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground text-balance">
            {post.title}
          </h1>
          <p className="mt-3 leading-7 text-muted-foreground text-pretty">
            {post.description}
          </p>
        </header>

        <div className="mt-8">
          <Mdx source={post.content} />
        </div>
      </article>

      <GiscusComments />
    </main>
  )
}
