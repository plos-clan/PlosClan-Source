import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const resources = defineCollection({
  loader: glob({
    base: './src/content/resources',
    pattern: '**/*.json'
  }),
  schema: z.object({
    order: z.number(),
    category: z.string(),
    categoryName: z.string(),
    categoryDescription: z.string(),
    title: z.string(),
    description: z.string(),
    fileSize: z.string(),
    downloadUrl: z.string(),
    dateAdded: z.string()
  })
})

const quotes = defineCollection({
  loader: glob({
    base: './src/content/quotes',
    pattern: '**/*.json'
  }),
  schema: z.object({
    order: z.number(),
    content: z.string(),
    author: z.string(),
    category: z.string(),
    categoryName: z.string(),
    date: z.string(),
    likes: z.number()
  })
})

const posts = defineCollection({
  loader: glob({
    base: './src/content/posts',
    pattern: '**/*.json'
  }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    content: z.string(),
    author: z.string(),
    category: z.string(),
    date: z.string(),
    likes: z.number(),
    comments: z.number(),
    tags: z.array(z.string())
  })
})

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.json'
  }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    categoryName: z.string(),
    technologies: z.array(z.string()),
    image: z.string(),
    github: z.string(),
    creators: z.array(z.string())
  })
})

const gallery = defineCollection({
  loader: glob({
    base: './src/content/gallery',
    pattern: '**/*.json'
  }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    date: z.string(),
    likes: z.number(),
    tags: z.array(z.string())
  })
})

export const collections = {
  gallery,
  posts,
  projects,
  quotes,
  resources
}
