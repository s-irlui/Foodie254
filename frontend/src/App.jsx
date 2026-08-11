import Navbar from "./components/navbar/Navbar"
import Hero from "./components/home/Hero"
import Categories from "./components/home/Categories"
import FeaturedRestaurants from "./components/home/FeaturedRestaurants"
import Locations from "./components/home/Locations"


function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <FeaturedRestaurants />
        <Locations />
      </main>
    </div>
  )
}

export default App