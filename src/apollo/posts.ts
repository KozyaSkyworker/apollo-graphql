import { gql } from '../__generated__/gql';

export const GET_ALL_POSTS = gql(`
  query GetAllPosts {
    allPosts {
      id
      title
    }
  }
`);

export const CREATE_POST = gql(`
  mutation CREATE_POST($title: String!, $views: Int!, $user_id: ID!){
    createPost(title: $title, views: $views, user_id: $user_id){
      id,
      title,
      views,
      user_id
    }
  }
`);
