
import { Toaster } from '@redwoodjs/web/toast'
import { useAuth } from 'src/auth'
import Navbar from 'src/components/Navbar'

const BlogLayout = ({ children }) => {

  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <Toaster />
      <header>
        <Navbar
          isAuthenticated={isAuthenticated}
          currentUser={currentUser}
          logOut={logOut}
        />
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
