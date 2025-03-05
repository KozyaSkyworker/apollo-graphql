import { gql } from '../__generated__/gql';

export const GET_ALL_POSTS = gql(`
  query GetAllPosts {
    allPosts {
      id
      title
    }
  }
`);
