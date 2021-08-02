const { gql } = require("apollo-server-express");

module.exports = gql`
     type User {
          id: ID
          username: String!
          email: String
          createdAt: String
          token: String
          latestMessage: Message
     }

     type Message {
          uuid: String!
          content: String!
          from: String!
          to: String!
          createdAt: String!
     }

     type Reaction {
          uuid: String!
          content: String!
          createdAt: String!
          message: Message!
          user: User!
     }

     input registerDetails {
          username: String!
          email: String!
          password: String!
          confirmPassword: String!
     }

     type Query {
          getUsers: [User]!
          login(username: String!, password: String!): User!
          getMessages(from: String!): [Message]!
     }

     type Mutation {
          register(RegisterDetails: registerDetails!): User!
          sendMessage(content: String!, to: String!): Message!
          reactToMessage(uuid: String!, content: String!): Reaction!
     }

     type Subscription {
          newMessage: Message!
          newReaction: Reaction!
     }
`;
