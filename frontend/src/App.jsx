import { Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"

import Home from "./pages/Home"
import Discover from "./pages/Discover"
import Restaurants from "./pages/Restaurants"
import RestaurantDetails from "./pages/RestaurantDetails"
import CategoriesPage from "./pages/CategoriesPage"
import LocationsPage from "./pages/LocationsPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Favorites from "./pages/Favorites"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/discover" element={<Discover />} />

        <Route path="/restaurants" element={<Restaurants />} />

        <Route
          path="/restaurants/:id"
          element={<RestaurantDetails />}
        />

        <Route
          path="/categories"
          element={<CategoriesPage />}
        />

        <Route
          path="/locations"
          element={<LocationsPage />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/favorites" element={<Favorites />} />

      </Route>
    </Routes>
  )
}

export default App