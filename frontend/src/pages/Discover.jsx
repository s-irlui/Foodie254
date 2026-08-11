import { useMemo, useState } from "react"

const restaurants = [
  {
    id: 1,
    name: "Burger & Beyond",
    cuisine: "Burgers",
    location: "Kilimani, Nairobi",
    rating: 4.8,
    price: 500,
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
    price: 400,
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
    price: 700,
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
    price: 800,
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
    price: 300,
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
    price: 600,
    priceLabel: "KSh 600 - 1,400",
    open: true,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
  },
]

function Discover() {
  // Search
  const [search, setSearch] = useState("")

  // Filters
  const [cuisine, setCuisine] = useState("")
  const [price, setPrice] = useState("")
  const [rating, setRating] = useState("")
  const [openNow, setOpenNow] = useState(false)

  // Sorting
  const [sort, setSort] = useState("recommended")

  // Favorites
  const [favorites, setFavorites] = useState([])

  // Filter + sort restaurants
  const filteredRestaurants = useMemo(() => {
    let results = restaurants.filter((restaurant) => {
      const searchTerm = search.toLowerCase().trim()

      const matchesSearch =
        searchTerm === "" ||
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm) ||
        restaurant.location.toLowerCase().includes(searchTerm)

      const matchesCuisine =
        cuisine === "" || restaurant.cuisine === cuisine

      const matchesPrice =
        price === "" ||
        (price === "low" && restaurant.price < 500) ||
        (price === "medium" &&
          restaurant.price >= 500 &&
          restaurant.price <= 1000) ||
        (price === "high" && restaurant.price > 1000)

      const matchesRating =
        rating === "" || restaurant.rating >= Number(rating)

      const matchesOpen =
        !openNow || restaurant.open === true

      return (
        matchesSearch &&
        matchesCuisine &&
        matchesPrice &&
        matchesRating &&
        matchesOpen
      )
    })

    // Sorting
    if (sort === "rating") {
      results.sort((a, b) => b.rating - a.rating)
    }

    if (sort === "price-low") {
      results.sort((a, b) => a.price - b.price)
    }

    if (sort === "price-high") {
      results.sort((a, b) => b.price - a.price)
    }

    if (sort === "name") {
      results.sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    }

    return results
  }, [search, cuisine, price, rating, openNow, sort])

  // Toggle favorite
  const toggleFavorite = (id) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(id)) {
        return currentFavorites.filter(
          (favoriteId) => favoriteId !== id
        )
      }

      return [...currentFavorites, id]
    })
  }

  // Clear filters
  const clearFilters = () => {
    setSearch("")
    setCuisine("")
    setPrice("")
    setRating("")
    setOpenNow(false)
    setSort("recommended")
  }

  const filtersActive =
    search !== "" ||
    cuisine !== "" ||
    price !== "" ||
    rating !== "" ||
    openNow

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
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search restaurants, cuisines or food..."
                className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-gray-500"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-gray-500 transition hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={() => {}}
              className="rounded-2xl bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600"
            >
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

          <button className="text-sm font-semibold text-orange-500 transition hover:text-orange-400">
            Change location
          </button>

        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-3">

          <select
            value={cuisine}
            onChange={(event) =>
              setCuisine(event.target.value)
            }
            className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm text-white outline-none"
          >
            <option value="">Cuisine</option>
            <option value="Kenyan">Kenyan</option>
            <option value="Burgers">Burgers</option>
            <option value="Pizza">Pizza</option>
            <option value="Seafood">Seafood</option>
            <option value="Coffee">Coffee</option>
            <option value="Grill">Grill</option>
          </select>

          <select
            value={price}
            onChange={(event) =>
              setPrice(event.target.value)
            }
            className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm text-white outline-none"
          >
            <option value="">Price</option>
            <option value="low">Under KSh 500</option>
            <option value="medium">
              KSh 500 - 1,000
            </option>
            <option value="high">
              KSh 1,000+
            </option>
          </select>

          <select
            value={rating}
            onChange={(event) =>
              setRating(event.target.value)
            }
            className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm text-white outline-none"
          >
            <option value="">Rating</option>
            <option value="4">4★+</option>
            <option value="4.5">4.5★+</option>
            <option value="4.8">4.8★+</option>
          </select>

          <button
            onClick={() => setOpenNow((current) => !current)}
            className={`rounded-xl border px-4 py-3 text-sm transition ${
              openNow
                ? "border-green-500 bg-green-500/10 text-green-400"
                : "border-white/10 bg-[#181818] text-white hover:border-orange-500"
            }`}
          >
            🟢 Open now
          </button>

          {filtersActive && (
            <button
              onClick={clearFilters}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-orange-500 transition hover:text-orange-400"
            >
              Clear filters
            </button>
          )}

        </div>

        {/* Results */}
        <div className="mt-12">

          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <h2 className="text-2xl font-bold">
                Restaurants near you
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {filteredRestaurants.length}{" "}
                {filteredRestaurants.length === 1
                  ? "restaurant"
                  : "restaurants"}{" "}
                found
              </p>
            </div>

            <select
              value={sort}
              onChange={(event) =>
                setSort(event.target.value)
              }
              className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm text-white outline-none"
            >
              <option value="recommended">
                Recommended
              </option>

              <option value="rating">
                Highest rated
              </option>

              <option value="price-low">
                Lowest price
              </option>

              <option value="price-high">
                Highest price
              </option>

              <option value="name">
                Name A-Z
              </option>
            </select>

          </div>

          {/* No results */}
          {filteredRestaurants.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-20 text-center">

              <div className="text-5xl">
                🍽️
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                No restaurants found
              </h3>

              <p className="mx-auto mt-3 max-w-md text-gray-400">
                Try changing your search or removing some
                filters to see more restaurants.
              </p>

              <button
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600"
              >
                Clear filters
              </button>

            </div>
          )}

          {/* Restaurant Cards */}
          {filteredRestaurants.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {filteredRestaurants.map((restaurant) => {
                const isFavorite =
                  favorites.includes(restaurant.id)

                return (
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

                      {/* Favorite */}
                      <button
                        onClick={() =>
                          toggleFavorite(restaurant.id)
                        }
                        className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur transition ${
                          isFavorite
                            ? "bg-orange-500 text-white"
                            : "bg-black/60 text-white hover:bg-orange-500"
                        }`}
                        aria-label={`${
                          isFavorite
                            ? "Remove"
                            : "Save"
                        } ${restaurant.name}`}
                      >
                        {isFavorite ? "♥" : "♡"}
                      </button>

                      {/* Open status */}
                      <div
                        className={`absolute bottom-4 left-4 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur ${
                          restaurant.open
                            ? "bg-green-500/90 text-white"
                            : "bg-black/70 text-gray-300"
                        }`}
                      >
                        {restaurant.open
                          ? "Open now"
                          : "Closed"}
                      </div>

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
                )
              })}

            </div>
          )}

        </div>

      </div>
    </section>
  )
}

export default Discover