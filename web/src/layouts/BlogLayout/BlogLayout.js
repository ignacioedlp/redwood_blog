
import { Toaster } from '@redwoodjs/web/toast'
import { useAuth } from 'src/auth'
import Footer from 'src/components/Footer/Footer'
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
      <Footer />
    </>
  )
}

export default BlogLayout
