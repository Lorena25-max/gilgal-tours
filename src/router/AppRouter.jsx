import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../pages/Home"
import Tours from "../pages/Tours"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tours" element={<Tours />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter