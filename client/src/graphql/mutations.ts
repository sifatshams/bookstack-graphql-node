import { gql } from '@apollo/client';

export const CREATE_NODE = gql`
    mutation CreateNode (
        $title: String!
        $author: String!
        $year: Int!
        $genre: String!
        $publisher: String!
    ) {
        createNode(
            title: $title
            author: $author
            year: $year
            genre: $genre
            publisher: $publisher
        ) {
            id
            title
            author
            year
            genre
            publisher
        }
    }
`;

export const UPDATE_NODE = gql`
  mutation UpdateNode(
    $id: ID!
    $title: String
    $author: String
    $year: Int
    $genre: String
    $publisher: String
  ) {
    updateNode(
      id: $id
      title: $title
      author: $author
      year: $year
      genre: $genre
      publisher: $publisher
    ) {
      id
      title
      author
      year
      genre
      publisher
    }
  }
`;

export const DELETE_NODE = gql`
  mutation DeleteNode($id: ID!) {
    deleteNode(id: $id)
  }
`;
