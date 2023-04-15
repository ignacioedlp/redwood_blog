import { Link, routes } from '@redwoodjs/router'
import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'

const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

const ArticleAll = ({ article }) => {
  return (

    <div key={article.id} className={
      summary ? "w-[294px]" : "w-full flex gap-2"
    }>
      <div href="#" class="block md:flex md:flex-col w-2/3">

        {!summary ? <img
          alt="Art"
          src="https://source.unsplash.com/random/?blog"
          className='object-cover w-full h-96'
        />
          : <img
            alt="Art"
            src="https://source.unsplash.com/random/300x300/?blog"
            className='rounded-lg'
          />
        }

        <div className='w-full my-6'>
          <Link className="text-3xl font-bold text-gray-900 sm:text-xl"
            to={routes.article({ id: article.id })}>{article.title}</Link>
        </div>

        <div className='w-full text-justify'>
          <p class="mt-2 max-w-sm text-gray-700 md:max-w-full">
            {summary ? truncate(article.content, 100) : article.content}
          </p>
        </div>

      </div>
      {
        !summary && (
          <div className="mt-12 ">
            <CommentForm postId={article.id} />
            <div className="mt-12">
              <CommentsCell postId={article.id} />
            </div>
          </div>
        )
      }
    </div>


  )
}

const ArticleSummary = ({ article }) => {
  return (

    <div key={article.id} className={
      summary ? "w-[294px]" : "w-full flex gap-2"
    }>
      <div href="#" class="block md:flex md:flex-col w-2/3">

        {!summary ? <img
          alt="Art"
          src="https://source.unsplash.com/random/?blog"
          className='object-cover w-full h-96'
        />
          : <img
            alt="Art"
            src="https://source.unsplash.com/random/300x300/?blog"
            className='rounded-lg'
          />
        }

        <div className='w-full my-6'>
          <Link className="text-3xl font-bold text-gray-900 sm:text-xl"
            to={routes.article({ id: article.id })}>{article.title}</Link>
        </div>

        <div className='w-full text-justify'>
          <p class="mt-2 max-w-sm text-gray-700 md:max-w-full">
            {summary ? truncate(article.content, 100) : article.content}
          </p>
        </div>

      </div>
      {
        !summary && (
          <div className="mt-12 ">
            <CommentForm postId={article.id} />
            <div className="mt-12">
              <CommentsCell postId={article.id} />
            </div>
          </div>
        )
      }
    </div>


  )
}

const Article = ({ article, summary = false }) => {
  return summary ? <ArticleSummary article={article} /> : <ArticleAll article={article} />
}

export default Article
