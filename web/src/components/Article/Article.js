import { Link, routes } from '@redwoodjs/router'
import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'
import moment from 'moment';

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

    <article class="flex bg-white transition hover:shadow-xl w-2/3" key={article.id}>
      <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          datetime="2022-10-10"
          class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>{moment(article.createdAt).format('YYYY')}</span>
          <span class="w-px flex-1 bg-gray-900/10"></span>
          <span>
            {moment(article.createdAt).format('MMM DD')}
          </span>
        </time>
      </div>

      <div class="hidden sm:block sm:basis-56">
        <img
          alt="Guitar"
          src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          class="aspect-square h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-1 flex-col justify-between">
        <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 class="font-bold uppercase text-gray-900">
              {article.title}
            </h3>
          </a>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            {truncate(article.content, 100)}
          </p>
        </div>

        <div class="sm:flex sm:items-end sm:justify-end">
          <Link class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            to={routes.article({ id: article.id })}>{article.title}</Link>
          <Link
            to={routes.article({ id: article.id })}
            class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </article>
  )
}

const Article = ({ article, summary = false }) => {
  console.log(article);

  return summary ? <ArticleSummary article={article} /> : <ArticleAll article={article} />
}

export default Article
