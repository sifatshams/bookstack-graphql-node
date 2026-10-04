export const typeDefs = `#graphql
    type Node {
        id: ID!
        title: String!
        author: String!
        year: Int!
        genre: String!
        publisher: String!
    }

    type Query {
        nodes: [Node!]!
        node(id: ID!): Node
    }

    type Mutation {
        createNode(
            title: String!
            author: String!
            year: Int!
            genre: String!
            publisher: String!
        ) : Node!

        updateNode(
            id: ID!
            title: String
            author: String
            year: Int
            genre: String
            publisher: String
        ) : Node!

        deleteNode(id: ID!): Boolean!
    }
`;
