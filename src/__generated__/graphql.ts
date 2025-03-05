/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date type */
  Date: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  Post?: Maybe<Post>;
  body: Scalars['String']['output'];
  date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  post_id: Scalars['ID']['output'];
};

export type CommentFilter = {
  body?: InputMaybe<Scalars['String']['input']>;
  body_gt?: InputMaybe<Scalars['String']['input']>;
  body_gte?: InputMaybe<Scalars['String']['input']>;
  body_lt?: InputMaybe<Scalars['String']['input']>;
  body_lte?: InputMaybe<Scalars['String']['input']>;
  body_neq?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  date_neq?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  post_id?: InputMaybe<Scalars['ID']['input']>;
  post_id_neq?: InputMaybe<Scalars['ID']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type CommentInput = {
  body: Scalars['String']['input'];
  date: Scalars['Date']['input'];
  post_id: Scalars['ID']['input'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createManyComment?: Maybe<Array<Maybe<Comment>>>;
  createManyPost?: Maybe<Array<Maybe<Post>>>;
  createManyUser?: Maybe<Array<Maybe<User>>>;
  createPost?: Maybe<Post>;
  createUser?: Maybe<User>;
  deleteComment?: Maybe<Comment>;
  deletePost?: Maybe<Post>;
  deleteUser?: Maybe<User>;
  removeComment?: Maybe<Comment>;
  removePost?: Maybe<Post>;
  removeUser?: Maybe<User>;
  updateComment?: Maybe<Comment>;
  updatePost?: Maybe<Post>;
  updateUser?: Maybe<User>;
};


export type MutationCreateCommentArgs = {
  body: Scalars['String']['input'];
  date: Scalars['Date']['input'];
  post_id: Scalars['ID']['input'];
};


export type MutationCreateManyCommentArgs = {
  data?: InputMaybe<Array<InputMaybe<CommentInput>>>;
};


export type MutationCreateManyPostArgs = {
  data?: InputMaybe<Array<InputMaybe<PostInput>>>;
};


export type MutationCreateManyUserArgs = {
  data?: InputMaybe<Array<InputMaybe<UserInput>>>;
};


export type MutationCreatePostArgs = {
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
  views: Scalars['Int']['input'];
};


export type MutationCreateUserArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemovePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommentArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['ID']['input'];
  post_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Post = {
  __typename?: 'Post';
  Comments?: Maybe<Array<Maybe<Comment>>>;
  User?: Maybe<User>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
  views: Scalars['Int']['output'];
};

export type PostFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  user_id_neq?: InputMaybe<Scalars['ID']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
  views_gt?: InputMaybe<Scalars['Int']['input']>;
  views_gte?: InputMaybe<Scalars['Int']['input']>;
  views_lt?: InputMaybe<Scalars['Int']['input']>;
  views_lte?: InputMaybe<Scalars['Int']['input']>;
  views_neq?: InputMaybe<Scalars['Int']['input']>;
};

export type PostInput = {
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
  views: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  Comment?: Maybe<Comment>;
  Post?: Maybe<Post>;
  User?: Maybe<User>;
  _allCommentsMeta?: Maybe<ListMetadata>;
  _allPostsMeta?: Maybe<ListMetadata>;
  _allUsersMeta?: Maybe<ListMetadata>;
  allComments?: Maybe<Array<Maybe<Comment>>>;
  allPosts?: Maybe<Array<Maybe<Post>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllCommentsMetaArgs = {
  filter?: InputMaybe<CommentFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllPostsMetaArgs = {
  filter?: InputMaybe<PostFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllUsersMetaArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllCommentsArgs = {
  filter?: InputMaybe<CommentFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllPostsArgs = {
  filter?: InputMaybe<PostFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  Posts?: Maybe<Array<Maybe<Post>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type UserInput = {
  name: Scalars['String']['input'];
};

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', allPosts?: Array<{ __typename?: 'Post', id: string, title: string } | null> | null };


export const GetAllPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetAllPostsQuery, GetAllPostsQueryVariables>;