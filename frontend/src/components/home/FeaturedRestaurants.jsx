const restaurants = [
  {
    id: 1,
    name: "Burger & Beyond",
    cuisine: "Burgers • American",
    location: "Kilimani, Nairobi",
    rating: "4.8",
    price: "KSh 500 – 1,200",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Mama's Kitchen",
    cuisine: "Kenyan • Local",
    location: "Westlands, Nairobi",
    rating: "4.7",
    price: "KSh 400 – 900",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Artisan Pizza",
    cuisine: "Pizza • Italian",
    location: "Lavington, Nairobi",
    rating: "4.9",
    price: "KSh 700 – 1,500",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
  },
]


function FeaturedRestaurants() {
  return (
    <section className="bg-[#0f0f0f] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Foodie picks
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Popular right now
            </h2>

            <p className="mt-3 max-w-xl text-gray-400">
              Discover some of the restaurants people are loving
              right now.
            </p>
          </div>

          <button className="w-fit text-sm font-semibold text-orange-500 transition hover:text-orange-400">
            View all restaurants →
          </button>
        </div>

        {/* Restaurant Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <article
              key={restaurant.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-orange-500/30"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Rating */}
                <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-2 text-sm font-semibold backdrop-blur">
                  ⭐ {restaurant.rating}
                </div>

                {/* Favorite */}
                <button
                  className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl backdrop-blur transition hover:bg-orange-500"
                  aria-label={`Save ${restaurant.name}`}
                >
                  ♡
                </button>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {restaurant.name}
                </h3>

                <p className="mt-2 text-sm text-orange-400">
                  {restaurant.cuisine}
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-400">
                  <p>📍 {restaurant.location}</p>
                  <p>💰 {restaurant.price}</p>
                </div>

                <button className="mt-6 w-full rounded-xl border border-white/10 py-3 text-sm font-semibold transition hover:border-orange-500 hover:bg-orange-500">
                  View restaurant
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedRestaurants