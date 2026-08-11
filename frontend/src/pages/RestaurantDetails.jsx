import { useParams } from "react-router-dom"

function RestaurantDetails() {
  const { id } = useParams()

  return (
    <section className="min-h-screen bg-[#0f0f0f] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Restaurant
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Restaurant #{id}
        </h1>

        <p className="mt-4 text-gray-400">
          Restaurant details will appear here.
        </p>

      </div>
    </section>
  )
}

export default RestaurantDetails