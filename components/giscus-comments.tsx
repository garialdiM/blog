'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export function GiscusComments() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="mt-16 border-t border-border pt-10">
      <Giscus
        id="comments"
        repo="TU_USUARIO/TU_REPO"
        repoId="TU_REPO_ID"
        category="General"
        categoryId="TU_CATEGORY_ID"
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
