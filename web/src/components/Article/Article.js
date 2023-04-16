import { Link, routes } from '@redwoodjs/router'
import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'

const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

const ArticleAll = ({ article }) => {
  return (

    <div key={article.id} className="w-full flex gap-6 h-[80vh]">
      <div href="#" class="block md:flex md:flex-col w-2/3">


        <img
          alt="Art"
          src="https://source.unsplash.com/random/?blog"
          className='object-cover w-full h-96'
        />

        <div className='w-full my-6'>
          <Link className="text-3xl font-bold text-gray-900"
            to={routes.article({ id: article.id })}>{article.title}</Link>
        </div>

        <div className='w-full text-justify'>
          <p class="mt-2 max-w-sm text-gray-700 md:max-w-full">
            {article.content}
          </p>
        </div>

      </div>
      <div className="mt-12 w-1/3">
        <CommentsCell postId={article.id} />
        <div className="mt-12">
          <CommentForm postId={article.id} />
        </div>
      </div>
    </div>


  )
}

const ArticleSummary = ({ article }) => {
  return (
    <div key={article.id} className="w-[294px]">
      <div href="#" class="block md:flex md:flex-col w-2/3 ">
        <img
          alt="Art"
          src="https://source.unsplash.com/random/300x300/?blog"
          className='rounded-lg'
        />
        <div className='w-full my-6'>
          <Link className="text-3xl font-bold text-gray-900 sm:text-xl"
            to={routes.article({ id: article.id })}>{article.title}</Link>
        </div>
        <div className='w-full text-justify'>
          <p class="mt-2 max-w-sm text-gray-700 md:max-w-full">
            {truncate(article.content, 100)}
          </p>
        </div>
      </div>
    </div>
  )
}

const Article = ({ article, summary = false }) => {
  return summary ? <ArticleSummary article={article} /> : <ArticleAll article={article} />
}

export default Article
