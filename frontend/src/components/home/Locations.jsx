const locations = [
  {
    id: 1,
    name: "Nairobi",
    description: "The capital's endless food scene",
    image:
      "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Mombasa",
    description: "Coastal flavors and Swahili cuisine",
    image:
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Kisumu",
    description: "Discover food by the lake",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Nakuru",
    description: "Great food in the heart of the Rift",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Eldoret",
    description: "Taste the flavors of the North Rift",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Thika",
    description: "Discover local food spots and gems",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Naivasha",
    description: "Food, views and weekend escapes",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Malindi",
    description: "Coastal dining and fresh seafood",
    image:
      "https://images.unsplash.com/photo-1539755530862-00f623c00f1f?auto=format&fit=crop&w=900&q=80",
  },
]

function Locations() {
  return (
    <section className="bg-[#0f0f0f] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Explore Kenya
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Discover food across Kenya
            </h2>

            <p className="mt-3 max-w-2xl text-gray-400">
              From Nairobi's busy streets to the coast and beyond,
              discover restaurants and food experiences wherever you are.
            </p>
          </div>

          <button className="w-fit text-sm font-semibold text-orange-500 transition hover:text-orange-400">
            View all locations →
          </button>
        </div>

        {/* Location Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <button
              key={location.id}
              className="group relative h-72 overflow-hidden rounded-3xl text-left"
            >
              {/* Image */}
              <img
                src={location.image}
                alt={location.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl font-bold">
                  {location.name}
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  {location.description}
                </p>

                <span className="mt-4 inline-block text-sm font-semibold text-orange-400 transition group-hover:text-orange-300">
                  Explore restaurants →
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Locations