import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { cache } from "react"

const postsDirectory = path.join(process.cwd(), "content/posts")

export type PostMeta = {
  slug: string
  title: string
  date: string
  description: string
  thumbnail?: string
}

export type Post = PostMeta & {
  content: string
}

function formatDateString(date: string) {
  return date
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""))
}

export const getPostBySlug = cache(function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.mdx?$/, "")
  const mdxPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const mdPath = path.join(postsDirectory, `${realSlug}.md`)
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath

  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    title: data.title ?? realSlug,
    date: data.date ?? "",
    description: data.description ?? "",
    thumbnail: data.thumbnail ?? undefined,
    content,
  }
})

export const getAllPosts = cache(function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const post = getPostBySlug(slug)
      if (!post) return null
      const { content, ...meta } = post
      return meta
    })
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
})

export function formatDate(date: string): string {
  if (!date) return ""
  const d = new Date(date)
  if (Number.isNaN(d.getTime())) return formatDateString(date)
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
