const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        authors: String
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
}
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        savedBooks: [ Book ]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        books: [Book]
        users: [User]
        me: User
        user(username: String!): User
    }

    type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs