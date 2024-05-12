import type { GetPostsQuery } from "./graphql/generated";

export type Post = GetPostsQuery["posts"][0];