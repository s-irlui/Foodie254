const benefits = [
  {
    id: 1,
    icon: "🔎",
    title: "Discover",
    description:
      "Find restaurants, hidden gems, and new places to eat across Kenya.",
  },
  {
    id: 2,
    icon: "⭐",
    title: "Real Reviews",
    description:
      "Make better decisions with ratings and experiences from real food lovers.",
  },
  {
    id: 3,
    icon: "📍",
    title: "Find Nearby",
    description:
      "Explore great restaurants around your location, wherever you are in Kenya.",
  },
]

function WhyFoodie254() {
  return (
    <section className="bg-[#0f0f0f] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Why FOODIE254
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            More than just finding food.
          </h2>

          <p className="mt-4 text-gray-400">
            FOODIE254 helps you discover great places to eat,
            explore new experiences, and find your next favorite spot.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-500/30"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-3xl">
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyFoodie254