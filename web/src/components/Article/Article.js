import { Link } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <div key={article.id}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <Link to={`/article/${article.id}`}>Read more</Link>
    </div>
  )
}

export default Article
