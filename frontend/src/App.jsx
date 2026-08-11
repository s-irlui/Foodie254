function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          FOODIE<span className="text-orange-500">254</span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Discover your next meal.
        </p>

        <button className="mt-8 rounded-full bg-orange-500 px-8 py-3 font-semibold hover:bg-orange-600 transition">
          Explore Food
        </button>
      </div>
    </div>
  )
}

export default App