'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export function GiscusComments() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="mt-16 border-t border-border pt-10">
      <Giscus
        id="comments"
        repo="garialdiM/blog"
        repoId="R_kgDOS0qyJA"
        category="General"
        categoryId="DIC_kwDOS0qyJM4C-xMm"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={resolvedTheme === 'dark' ? 'transparent_dark' : 'light'}
        lang="es"
        loading="lazy"
      />
    </div>
  )
}
