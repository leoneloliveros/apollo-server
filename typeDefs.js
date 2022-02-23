const { gql } = require('apollo-server-express')
const typeDefs = gql`
  "Este tipo 'Book' refiere a los campos del libro"
  type Book {
    id: ID!
    title: String!
    "Este es el autor del libro"
    author: String!
    createdAt: String
    updatedAt: String
  }

  type User {
    id: ID!
    email: String!
    username: String!
    password: String!
    createdAt: String
    updatedAt: String
  }

  type Query {
    hello: String
    allBooks: [Book]
    book(title: String!): Book
  }

  input BookInput {
    title: String
    author: String
  }

  input CreateUserInput {
    email: String!
    password: String!
    username: String!
  }

  input LoginUserInput {
    email: String!
    password: String!
  }

  type LoginPayload {
    user: User
    token: String!
  }

  type Mutation {
    addBook(input: BookInput!): Book
    "Esta funcion es para crear un usuario"
    createAccount(input: CreateUserInput!): User
    logInUser(input: LoginUserInput!): LoginPayload!
  }
`

module.exports = typeDefs