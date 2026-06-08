export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-2xl px-6 py-12">
      <div className="border-t border-border pt-8">
        <p className="text-sm text-muted-foreground">
          {`© ${new Date().getFullYear()} dev/blog. Built with Next.js and MDX.`}
        </p>
      </div>
    </footer>
  )
}
