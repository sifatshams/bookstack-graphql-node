import { gql } from '@apollo/client';

export const GET_NODES = gql`
  query GetNodes {
    nodes {
      id
      title
      author
      year
      genre
      publisher
    }
  }
`;
