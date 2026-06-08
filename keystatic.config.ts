import { config, collection, fields } from '@keystatic/core'

export default config({
  storage: { kind: 'local' },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        date: fields.date({ label: 'Fecha' }),
        description: fields.text({ label: 'Descripción', multiline: true }),
        thumbnail: fields.image({
          label: 'Thumbnail',
          directory: 'public/thumbnails',
          publicPath: '/thumbnails/',
        }),
        content: fields.mdx({ label: 'Contenido' }),
      },
    }),
  },
})
