import { glob } from "astro/loaders";
import { defineCollection,z } from "astro:content";
import { FrontmatterSchema } from "./schemas/frontmatterSchema";

const posts = defineCollection({
    loader: glob({
        base: "./src/content/posts",
        pattern:"**/*.{md,mdx}"
    }),
    schema: FrontmatterSchema
});

const about = defineCollection({
  // Load Markdown files in the `src/content/about/` directory.
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: z.object({})
})


export const collections = {
    posts,
    about
}