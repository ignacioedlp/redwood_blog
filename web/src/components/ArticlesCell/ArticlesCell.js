import { Link } from "@redwoodjs/router"
import Article from "../Article/Article"

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      content
      user {
        name
        email
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }) => {

  return (
    <div className="flex flex-col flex-wrap items-center justify-center mt-16 gap-9 md:flex-row">
      {
        articles.map((item) => (
          <Article article={item} key={item.id} summary={true} />
        ))
      }
    </div>
  )
}
