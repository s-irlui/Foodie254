function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">

        {/* Left Side */}
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Kenya's food discovery platform
          </p>

          <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Find your next
            <span className="block text-orange-500">
              favorite meal.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Discover amazing restaurants, hidden food spots,
            and unforgettable meals across Kenya.
          </p>

          {/* Search */}
          <div className="mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row">

              <div className="flex flex-1 items-center rounded-xl bg-[#181818] px-4">
                <span className="mr-3 text-lg">🔎</span>

                <input
                  type="text"
                  placeholder="What are you craving?"
                  className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-500"
                />
              </div>

              <button className="rounded-xl bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600">
                Search
              </button>

            </div>
          </div>

          {/* Location */}
          <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
            <span>📍</span>
            <span>Discover restaurants near you</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative hidden md:block">

          <div className="absolute -inset-6 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181818] shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80"
              alt="Delicious pizza"
              className="h-[520px] w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-md">
              <p className="text-sm text-gray-400">
                Popular right now
              </p>

              <div className="mt-1 flex items-center justify-between">
                <h3 className="font-semibold">
                  Artisan Pizza
                </h3>

                <span className="text-sm text-orange-400">
                  ⭐ 4.8
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero