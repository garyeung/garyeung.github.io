import { getCollection } from "astro:content";
import { config } from "../../config";
import type { PostsEntry } from "../types/posts";
const postPreviewSize = config.post.previewSize;

export const AllPosts: PostsEntry[] = await getCollection('posts'); 

export const UniqueTags = [...new Set(AllPosts.map((post) => post.data.tags).flat())];
export const LatestPosts = AllPosts
	.sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());	


export const HomePageLatestPosts = LatestPosts.slice(0,postPreviewSize);