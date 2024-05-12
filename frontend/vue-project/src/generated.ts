import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Post = {
  __typename?: 'Post';
  completed: Scalars['Boolean']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Query = {
  __typename?: 'Query';
  posts: Array<Post>;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, title: string, content: string, completed: boolean, createdAt: any, updatedAt: any }> };


export const GetPostsDocument = gql`
    query GetPosts {
  posts {
    id
    title
    content
    completed
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a Vue component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPostsQuery();
 */
export function useGetPostsQuery(options: VueApolloComposable.UseQueryOptions<GetPostsQuery, GetPostsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPostsQuery, GetPostsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPostsQuery, GetPostsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, {}, options);
}
export function useGetPostsLazyQuery(options: VueApolloComposable.UseQueryOptions<GetPostsQuery, GetPostsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPostsQuery, GetPostsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPostsQuery, GetPostsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, {}, options);
}
export type GetPostsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetPostsQuery, GetPostsQueryVariables>;