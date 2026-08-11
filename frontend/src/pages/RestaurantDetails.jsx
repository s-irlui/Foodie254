import { Link, useParams } from "react-router-dom"

const restaurants = [
  {
    id: 1,
    name: "Burger & Beyond",
    cuisine: "Burgers",
    location: "Kilimani, Nairobi",
    rating: 4.8,
    reviews: 128,
    price: "KSh 500 - 1,200",
    open: true,
    hours: "10:00 AM - 10:00 PM",
    description:
      "A modern burger spot serving juicy handcrafted burgers, crispy fries and refreshing drinks.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    name: "Mama's Kitchen",
    cuisine: "Kenyan",
    location: "Westlands, Nairobi",
    rating: 4.7,
    reviews: 96,
    price: "KSh 400 - 900",
    open: true,
    hours: "8:00 AM - 9:00 PM",
    description:
      "Authentic Kenyan meals prepared with fresh ingredients and traditional flavors.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    name: "Artisan Pizza",
    cuisine: "Pizza",
    location: "Lavington, Nairobi",
    rating: 4.9,
    reviews: 174,
    price: "KSh 700 - 1,500",
    open: true,
    hours: "11:00 AM - 11:00 PM",
    description:
      "Wood-fired artisan pizzas made with fresh ingredients and a whole lot of love.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 4,
    name: "Coastal Bites",
    cuisine: "Seafood",
    location: "Nyali, Mombasa",
    rating: 4.6,
    reviews: 82,
    price: "KSh 800 - 1,800",
    open: false,
    hours: "11:00 AM - 10:00 PM",
    description:
      "Fresh coastal seafood and Swahili-inspired dishes right in the heart of Mombasa.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 5,
    name: "Java House",
    cuisine: "Coffee",
    location: "CBD, Nairobi",
    rating: 4.5,
    reviews: 215,
    price: "KSh 300 - 1,000",
    open: true,
    hours: "6:30 AM - 10:00 PM",
    description:
      "A relaxed cafe serving coffee, breakfast, lunch and delicious pastries.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 6,
    name: "Lake View Grill",
    cuisine: "Grill",
    location: "Kisumu",
    rating: 4.7,
    reviews: 74,
    price: "KSh 600 - 1,400",
    open: true,
    hours: "11:00 AM - 10:00 PM",
    description:
      "Great grilled meats, local favorites and beautiful views in Kisumu.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
  },
]

function RestaurantDetails() {
  const { id } = useParams()

  const restaurant = restaurants.find(
    (item) => item.id === Number(id)
  )

  if (!restaurant) {
    return (
      <section className="min-h-screen bg-[#0f0f0f] px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">

          <div className="text-6xl">
            🍽️
          </div>

          <h1 className="mt-6 text-4xl font-bold">
            Restaurant not found
          </h1>

          <p className="mt-4 text-gray-400">
            We couldn't find the restaurant you're looking for.
          </p>

          <Link
            to="/discover"
            className="mt-8 inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600"
          >
            Back to Discover
          </Link>

        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white">

      {/* Hero Image */}
      <div className="relative h-[420px] overflow-hidden">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/30 to-black/20" />

        <div className="absolute left-6 right-6 top-8 mx-auto max-w-7xl">

          <Link
            to="/discover"
            className="inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm font-semibold backdrop-blur transition hover:bg-orange-500"
          >
            ← Back to Discover
          </Link>

        </div>

        <div className="absolute bottom-8 left-6 right-6 mx-auto max-w-7xl">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold">
              {restaurant.cuisine}
            </span>

            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                restaurant.open
                  ? "bg-green-500"
                  : "bg-black/70"
              }`}
            >
              {restaurant.open ? "Open now" : "Closed"}
            </span>

          </div>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            {restaurant.name}
          </h1>

        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-10 lg:grid-cols-[1fr_350px]">

          {/* Main */}
          <div>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-5">

              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  ⭐
                </span>

                <span className="text-xl font-bold">
                  {restaurant.rating}
                </span>

                <span className="text-gray-500">
                  ({restaurant.reviews} reviews)
                </span>
              </div>

              <div className="text-gray-500">
                •
              </div>

              <div className="text-gray-300">
                {restaurant.price}
              </div>

            </div>

            {/* Description */}
            <div className="mt-10">

              <h2 className="text-2xl font-bold">
                About {restaurant.name}
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-gray-400">
                {restaurant.description}
              </p>

            </div>

            {/* Info */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-2 font-semibold">
                  📍 {restaurant.location}
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="text-sm text-gray-500">
                  Opening hours
                </p>

                <p className="mt-2 font-semibold">
                  🕐 {restaurant.hours}
                </p>

              </div>

            </div>

            {/* Menu Preview */}
            <div className="mt-12">

              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  Popular dishes
                </h2>

                <button className="text-sm font-semibold text-orange-500">
                  View full menu →
                </button>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-bold">
                        Signature Dish
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        Chef's recommended favorite
                      </p>
                    </div>

                    <span className="font-semibold text-orange-500">
                      KSh 850
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-bold">
                        House Special
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        One of our most popular choices
                      </p>
                    </div>

                    <span className="font-semibold text-orange-500">
                      KSh 700
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Sidebar */}
          <aside>

            <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/5 p-6">

              <h2 className="text-xl font-bold">
                Visit this restaurant
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Plan your visit or save this restaurant
                to your FOODIE254 favorites.
              </p>

              <button className="mt-6 w-full rounded-xl bg-orange-500 py-3 font-semibold transition hover:bg-orange-600">
                ❤️ Add to favorites
              </button>

              <button className="mt-3 w-full rounded-xl border border-white/10 py-3 font-semibold transition hover:border-orange-500">
                📞 Contact restaurant
              </button>

              <div className="mt-6 border-t border-white/10 pt-6">

                <p className="text-sm text-gray-500">
                  Address
                </p>

                <p className="mt-2 text-sm font-semibold">
                  {restaurant.location}
                </p>

              </div>

              {/* Map placeholder */}
              <div className="mt-5 flex h-40 items-center justify-center rounded-2xl bg-[#181818] text-center">

                <div>
                  <div className="text-3xl">
                    🗺️
                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    Map coming soon
                  </p>
                </div>

              </div>

            </div>

          </aside>

        </div>

      </div>

    </section>
  )
}

export default RestaurantDetails