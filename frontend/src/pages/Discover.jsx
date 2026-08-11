const restaurants = [
  {
    id: 1,
    name: "Burger & Beyond",
    cuisine: "Burgers",
    location: "Kilimani, Nairobi",
    rating: 4.8,
    price: "500-1200",
    priceLabel: "KSh 500 - 1,200",
    open: true,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Mama's Kitchen",
    cuisine: "Kenyan",
    location: "Westlands, Nairobi",
    rating: 4.7,
    price: "400-900",
    priceLabel: "KSh 400 - 900",
    open: true,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Artisan Pizza",
    cuisine: "Pizza",
    location: "Lavington, Nairobi",
    rating: 4.9,
    price: "700-1500",
    priceLabel: "KSh 700 - 1,500",
    open: true,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Coastal Bites",
    cuisine: "Seafood",
    location: "Nyali, Mombasa",
    rating: 4.6,
    price: "800-1800",
    priceLabel: "KSh 800 - 1,800",
    open: false,
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Java House",
    cuisine: "Coffee",
    location: "CBD, Nairobi",
    rating: 4.5,
    price: "300-1000",
    priceLabel: "KSh 300 - 1,000",
    open: true,
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Lake View Grill",
    cuisine: "Grill",
    location: "Kisumu",
    rating: 4.7,
    price: "600-1400",
    priceLabel: "KSh 600 - 1,400",
    open: true,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
  },
]

function Discover() {
  return (
    <section className="min-h-screen bg-[#0f0f0f] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Discover
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Find your next favorite meal
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Search restaurants, explore cuisines, and discover
            great food across Kenya.
          </p>
        </div>

        {/* Search */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-4">
          <div className="flex flex-col gap-3 lg:flex-row">

            <div className="flex flex-1 items-center rounded-2xl bg-[#181818] px-5">
              <span className="mr-3 text-lg">
                🔎
              </span>

              <input
                type="text"
                placeholder="Search restaurants, cuisines or food..."
                className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-gray-500"
              />
            </div>

            <button className="rounded-2xl bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600">
              Search
            </button>

          </div>
        </div>

        {/* Location */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">
              📍
            </span>

            <div>
              <p className="text-xs text-gray-500">
                Your location
              </p>

              <p className="font-semibold">
                Nairobi, Kenya
              </p>
            </div>
          </div>

          <button className="text-sm font-semibold text-orange-500 hover:text-orange-400">
            Change location
          </button>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-3">

          <select className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm text-white outline-none">
            <option value="">Cuisine</option>
            <option value="Kenyan">Kenyan</option>
            <option value="Burgers">Burgers</option>
            <option value="Pizza">Pizza</option>
            <option value="Seafood">Seafood</option>
            <option value="Coffee">Coffee</option>
            <option value="Grill">Grill</option>
          </select>

          <select className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm text-white outline-none">
            <option value="">Price</option>
            <option value="low">Under KSh 500</option>
            <option value="medium">KSh 500 - 1,000</option>
            <option value="high">KSh 1,000+</option>
          </select>

          <select className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm text-white outline-none">
            <option value="">Rating</option>
            <option value="4">4★+</option>
            <option value="4.5">4.5★+</option>
            <option value="4.8">4.8★+</option>
          </select>

          <button className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm transition hover:border-orange-500">
            🟢 Open now
          </button>

        </div>

        {/* Results */}
        <div className="mt-12">

          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Restaurants near you
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {restaurants.length} restaurants found
              </p>
            </div>

            <select className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm text-white outline-none">
              <option>Recommended</option>
              <option>Highest rated</option>
              <option>Lowest price</option>
              <option>Newest</option>
            </select>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((restaurant) => (
              <article
                key={restaurant.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30"
              >

                {/* Image */}
                <div className="relative h-60 overflow-hidden">

                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Rating */}
                  <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-2 text-sm font-semibold backdrop-blur">
                    ⭐ {restaurant.rating}
                  </div>

                  {/* Open status */}
                  <div
                    className={`absolute bottom-4 left-4 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur ${
                      restaurant.open
                        ? "bg-green-500/90 text-white"
                        : "bg-black/70 text-gray-300"
                    }`}
                  >
                    {restaurant.open ? "Open now" : "Closed"}
                  </div>

                </div>

                {/* Content */}
                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        {restaurant.name}
                      </h3>

                      <p className="mt-2 text-sm text-orange-400">
                        {restaurant.cuisine}
                      </p>
                    </div>

                    <button
                      className="text-2xl text-gray-400 transition hover:text-orange-500"
                      aria-label={`Save ${restaurant.name}`}
                    >
                      ♡
                    </button>
                  </div>

                  <div className="mt-5 space-y-2 text-sm text-gray-400">
                    <p>
                      📍 {restaurant.location}
                    </p>

                    <p>
                      💰 {restaurant.priceLabel}
                    </p>
                  </div>

                  <button className="mt-6 w-full rounded-xl border border-white/10 py-3 text-sm font-semibold transition hover:border-orange-500 hover:bg-orange-500">
                    View restaurant
                  </button>

                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Discover