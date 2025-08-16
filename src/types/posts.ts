import type { CollectionEntry} from "astro:content";
import { FrontmatterSchema } from "../schemas/frontmatterSchema";
import { createTypeAlias, zodToTs } from "zod-to-ts"


export type PostsEntry= CollectionEntry<"posts">

const frontmatterID = "Frontmatter"
const {node} = zodToTs(FrontmatterSchema, frontmatterID)
const typeAlias = createTypeAlias(
	node,
	frontmatterID,
)

export type Frontmatter = {
    title: string;
    pubDate: Date;
    author: string;
    tags: string[];
    updateDate?: Date | undefined;
    description: string; 
    heroImage?: {
        url: string;
        alt: string;
    } | undefined;
}