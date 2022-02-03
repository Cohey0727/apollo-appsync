import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  /**   A unique identifier for the comment. */
  commentId: Scalars['String'];
  /**   The comment's content. */
  content: Scalars['String'];
  /**   The comment timestamp. This field is indexed to enable sorted pagination. */
  createdAt: Scalars['String'];
  /**   The id of the comment's parent event. */
  eventId: Scalars['ID'];
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  items?: Maybe<Array<Maybe<Comment>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  /**   Paginate through all comments belonging to an individual post. */
  comments?: Maybe<CommentConnection>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  when?: Maybe<Scalars['String']>;
  where?: Maybe<Scalars['String']>;
};


export type EventCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  items?: Maybe<Array<Maybe<Event>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**   Comment on an event. */
  commentOnEvent?: Maybe<Comment>;
  /**   Create a single event. */
  createEvent?: Maybe<Event>;
  /**   Delete a single event by id. */
  deleteEvent?: Maybe<Event>;
};


export type MutationCommentOnEventArgs = {
  content: Scalars['String'];
  createdAt: Scalars['String'];
  eventId: Scalars['ID'];
};


export type MutationCreateEventArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
  when: Scalars['String'];
  where: Scalars['String'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  /**   Get a single event by id. */
  getEvent?: Maybe<Event>;
  /**   Paginate through events. */
  listEvents?: Maybe<EventConnection>;
};


export type QueryGetEventArgs = {
  id: Scalars['ID'];
};


export type QueryListEventsArgs = {
  filter?: InputMaybe<TableEventFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribeToEventComments?: Maybe<Comment>;
};


export type SubscriptionSubscribeToEventCommentsArgs = {
  eventId: Scalars['String'];
};

export type TableBooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type TableEventFilterInput = {
  description?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  when?: InputMaybe<TableStringFilterInput>;
  where?: InputMaybe<TableStringFilterInput>;
};

export type TableFloatFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notContains?: InputMaybe<Scalars['Float']>;
};

export type TableIdFilterInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
};

export type TableIntFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notContains?: InputMaybe<Scalars['Int']>;
};

export type TableStringFilterInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
};

export type ListEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListEventsQuery = { __typename?: 'Query', listEvents?: { __typename?: 'EventConnection', items?: Array<{ __typename?: 'Event', id: string, name?: string | null, description?: string | null, when?: string | null, where?: string | null } | null> | null } | null };


export const ListEventsDocument = gql`
    query ListEvents {
  listEvents {
    items {
      id
      name
      description
      when
      where
    }
  }
}
    `;

/**
 * __useListEventsQuery__
 *
 * To run a query within a React component, call `useListEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListEventsQuery(baseOptions?: Apollo.QueryHookOptions<ListEventsQuery, ListEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListEventsQuery, ListEventsQueryVariables>(ListEventsDocument, options);
      }
export function useListEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListEventsQuery, ListEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListEventsQuery, ListEventsQueryVariables>(ListEventsDocument, options);
        }
export type ListEventsQueryHookResult = ReturnType<typeof useListEventsQuery>;
export type ListEventsLazyQueryHookResult = ReturnType<typeof useListEventsLazyQuery>;
export type ListEventsQueryResult = Apollo.QueryResult<ListEventsQuery, ListEventsQueryVariables>;