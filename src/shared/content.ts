import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import { isProd } from "./env";

export async function getAllBlogPosts() {
  return await getCollection("blog", ({ data }) => {
    return isProd() ? data.draft !== true : true;
  });
}

export function getAllBlogTags(posts: Array<CollectionEntry<"blog">>) {
}

export async function getAllStaticPages() {
  return await getCollection("page", ({ data }) => {
    return isProd() ? data.draft !== true : true;
  });
}