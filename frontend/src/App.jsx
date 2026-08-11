import Navbar from "./components/navbar/Navbar"
import Hero from "./components/home/Hero"
import Categories from "./components/home/Categories"
import FeaturedRestaurants from "./components/home/FeaturedRestaurants"
import Locations from "./components/home/Locations"
import WhyFoodie254 from "./components/home/WhyFoodie254"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <FeaturedRestaurants />
        <Locations />
        <WhyFoodie254 />
      </main>

      <Footer />
    </div>
  )
}

export default App