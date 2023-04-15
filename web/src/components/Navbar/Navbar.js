import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'

const Navbar = ({ isAuthenticated, currentUser, logOut }) => {

  const [open, setOpen] = useState(true);

  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img src="/vortex_logo.png" alt="" width={50} height={50} />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">

            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm font-semibold">
                <li>
                  <Link to={routes.about()}>About</Link>
                </li>
                <li>
                  <Link to={routes.contact()}>Contact</Link>
                </li>
                <li>
                  <Link to={routes.posts()}>My posts</Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4 ">
              {!isAuthenticated ? (
                <div className="sm:flex sm:gap-4">
                  <div className="hidden sm:flex shadow-md shadow-slate-400">
                    <Link to={routes.login()} className="rounded-md bg-[#222222] px-5 py-2.5 text-sm font-medium text-white shadow text-center"
                    >Login</Link>
                  </div>

                  <div className="hidden sm:flex shadow-md shadow-slate-400">
                    <Link
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#222222] border-[#222222] border-2
                      "
                      to={routes.signup()}
                    >
                      Register
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="sm:flex sm:gap-4 shadow-md shadow-slate-400">
                  <button
                    className="rounded-md bg-[#222222] px-5 py-2.5 text-sm font-medium text-white
                     shadow-2xl"
                    onClick={logOut}
                  >
                    logout
                  </button>
                </div>
              )}

              <div className="block md:hidden">
                <button
                  className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
