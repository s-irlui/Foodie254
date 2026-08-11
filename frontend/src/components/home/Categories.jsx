const categories = [
  {
    name: "Burgers",
    emoji: "🍔",
  },
  {
    name: "Pizza",
    emoji: "🍕",
  },
  {
    name: "Chicken",
    emoji: "🍗",
  },
  {
    name: "Kenyan",
    emoji: "🍛",
  },
  {
    name: "Sushi",
    emoji: "🍣",
  },
  {
    name: "Coffee",
    emoji: "☕",
  },
]

function Categories() {
  return (
    <section className="bg-[#0f0f0f] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What are you craving?
          </h2>

          <p className="mt-3 max-w-xl text-gray-400">
            Discover delicious food from restaurants and hidden
            gems across Kenya.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/10"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#181818] text-3xl transition duration-300 group-hover:scale-110">
                {category.emoji}
              </div>

              <h3 className="mt-4 font-semibold">
                {category.name}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Explore
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Categories