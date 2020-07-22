import React from "react"
import Header from "components/Header"
import Footer from "components/Footer"
import Home from "pages/home/Home"
import GlobalFonts from "fonts/fonts"

const App = () => {
	return (
		<>
			<GlobalFonts />
			<Header />
			<Home />
			<Footer />
		</>
	)
}

export default App
