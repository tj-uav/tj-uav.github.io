"use client"
import { useEffect } from "react"
import { BrowserRouter as Router, Navigate, Routes, Route, useLocation } from "react-router-dom"
import Header from "components/Header"
import Footer from "components/Footer"
import SponsorList from "components/SponsorList"
import Home from "pages/home/Home"
import Members from "pages/members/Members"
import Subteams from "pages/subteams/Subteams"
import Search from "pages/search/Search.js"
import Blogs from "pages/blogs/blogs"
import Contact from "pages/contact/Contact"
import GlobalFonts from "fonts/fonts"

const App = () => {
  const headerHeight = "5.375rem"
  return (
    <Router>
      <GlobalFonts />
      <Location />
      <Header headerHeight={headerHeight} />
      
      {/* HeaderPlaceholder on all routes for consistent spacing */}
      <HeaderPlaceholder height={headerHeight} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route path="/members" element={<Members />} />
        <Route path="/subteams" element={<Subteams />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <SponsorList />
      <Footer />
    </Router>
  )
}

const HeaderPlaceholder = ({ height }) => {
  return <div style={{ height, width: "100%" }} />
}

const Location = () => {
  const location = useLocation()
  useEffect(() => {
    try {
      const match = /\/((\w)\w*)$/i.exec(location.pathname)
      if (match) {
        const [, title, first] = match
        const page = title.replace(first, first.toUpperCase())
        document.title = `TJUAV | ${page}`
      } else {
        document.title = "TJUAV"
      }
    } catch (e) {
      console.error(e)
    }
  }, [location])
  return null
}

export default App