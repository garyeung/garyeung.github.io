import { z } from "astro:content";

export const FrontmatterSchema = 
    z.object({
    title: z.string(),                  // Required string
    pubDate: z.date(),               
    updateDate: z.date().optional(),
    description: z.string(),
    author: z.string(),                 // Required string
    heroImage: z.object({                  // Optional nested object
    url: z.string(),
    alt: z.string(),
    }).optional(),
    tags: z.array(z.string()),
    })