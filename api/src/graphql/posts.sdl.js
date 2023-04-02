export const schema = gql`
  type Post {
    id: Int!
    title: String!
    content: String!
    createdAt: DateTime!
    published: Boolean!
    updatedAt: DateTime!
    user: User!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }
`