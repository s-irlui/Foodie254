function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              FOODIE<span className="text-orange-500">254</span>
            </h2>

            <p className="mt-4 max-w-xs leading-7 text-gray-400">
              Discover restaurants, hidden food spots,
              and unforgettable meals across Kenya.
            </p>
          </div>

          {/* Discover */}
          <div>
            <h3 className="font-semibold">
              Discover
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  Restaurants
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Locations
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Popular
                </a>
              </li>
            </ul>
          </div>

          {/* For Restaurants */}
          <div>
            <h3 className="font-semibold">
              For Restaurants
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  List your restaurant
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Restaurant login
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  About FOODIE254
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Terms
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 FOODIE254. All rights reserved.
          </p>

          <p>
            Made in 🇰🇪 Kenya
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer