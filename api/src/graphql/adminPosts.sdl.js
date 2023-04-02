export const schema = gql`
  type Query {
    adminPosts: [Post!]! @requireAuth(roles: ["moderator"])
    adminPost(id: Int!): Post @requireAuth(roles: ["moderator"])
  }

  input CreatePostInput {
    title: String!
    content: String!
    published: Boolean!
  }

  input UpdatePostInput {
    title: String
    content: String
    published: Boolean
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth(roles: ["moderator"])
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth(roles: ["moderator"])
    deletePost(id: Int!): Post! @requireAuth(roles: ["moderator"])
  }
`