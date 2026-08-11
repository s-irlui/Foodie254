import { Outlet } from "react-router-dom"

import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout