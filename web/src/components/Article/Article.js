import { Link, routes } from '@redwoodjs/router'
import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'

const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

const Article = ({ article, summary = false }) => {
  return (
    <div key={article.id} className='flex flex-col gap-3 justify-start w-1/2'>
      <h2 className="text-xl text-blue-700 font-semibold">
        <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        <span className="ml-2 text-gray-400 font-normal">
          by {article.user.email}
        </span>
      </h2>
      <p className='text-justify'>{summary ? truncate(article.content, 100) : article.content}</p>
      {!summary && (
        <div className="mt-12">
          <CommentForm postId={article.id} />
          <div className="mt-12">
            <CommentsCell postId={article.id} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Article
