import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />
      <div className='p-10'>
        <ArticleCell id={id} />
      </div>
    </>
  )
}

export default ArticlePage
