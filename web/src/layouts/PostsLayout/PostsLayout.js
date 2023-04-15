import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { useAuth } from 'src/auth'
import Footer from 'src/components/Footer/Footer'
import Navbar from 'src/components/Navbar'

const PostsLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}) => {

  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Navbar
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        logOut={logOut}
      />
      <header className="rw-header max-w-screen-xl mx-auto flex items-center">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes[titleTo]()} className="rw-link text-5xl font-bold">
            {title}
          </Link>
        </h1>
        <Link to={routes[buttonTo]()} className="rw-button rw-button-green h-1/2">
          <div className="rw-button-icon">+</div> {buttonLabel}
        </Link>
      </header>
      <main className="rw-main">{children}</main>
      <Footer />
    </div>
  )
}

export default PostsLayout
