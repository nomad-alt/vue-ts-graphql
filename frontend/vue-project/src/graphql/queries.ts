import { gql } from 'graphql-tag';

export const GET_POSTS = gql`
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