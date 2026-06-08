import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-2xl items-center justify-between px-6 py-8">
      <Link
        href="/"
        className="font-mono text-sm font-medium tracking-tight text-foreground"
      >
        dev/blog
      </Link>
      <nav className="flex items-center gap-1">
        <Link
          href="/"
          className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Writing
        </Link>
        <Link
          href="/about"
          className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}
