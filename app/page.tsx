import Link from "next/link"
import Image from "next/image"
import { getAllPosts, formatDate } from "@/lib/posts"

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <main className="mx-auto max-w-2xl px-6">
      <section className="py-8">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
          Notes on building for the web
        </h1>
        <p className="mt-3 leading-7 text-muted-foreground text-pretty">
          Essays and experiments about software, design, and the craft of
          shipping. Written for developers who care about the details.
        </p>
      </section>

      <section className="py-4">
        <ul className="flex flex-col">
          {posts.map((post) => (
            <li key={post.slug} className="border-t border-border">
              <Link
                href={`/posts/${post.slug}`}
                className="group flex items-start gap-5 py-6 transition-opacity"
              >
                {post.thumbnail && (
                  <div className="relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-md border border-border bg-muted sm:w-32">
                    <Image
                      src={post.thumbnail || "/placeholder.svg"}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 96px, 128px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex min-w-0 flex-col gap-1">
                  <time
                    dateTime={post.date}
                    className="font-mono text-xs uppercase tracking-wide text-muted-foreground"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h2 className="text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-muted-foreground">
                    {post.title}
                  </h2>
                  <p className="leading-7 text-muted-foreground text-pretty">
                    {post.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {posts.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            No posts yet. Add an .mdx file to{" "}
            <code className="font-mono text-sm">content/posts</code>.
          </p>
        )}
      </section>
    </main>
  )
}
