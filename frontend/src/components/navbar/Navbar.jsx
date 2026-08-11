import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-[#0f0f0f] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          FOODIE<span className="text-orange-500">254</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/discover"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Discover
          </Link>

          <Link
            to="/restaurants"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Restaurants
          </Link>

          <Link
            to="/categories"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Categories
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">

          <button
            className="text-xl text-gray-300 transition hover:text-red-400"
            aria-label="Favorites"
          >
            ♡
          </button>

          <Link
            to="/login"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Sign Up
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl text-gray-200 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>
    </nav>
  )
}

export default Navbar