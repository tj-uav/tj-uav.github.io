import React from "react"
import Heading from "components/Header"
import Home from "pages/home/Home"
import GlobalFonts from "fonts/fonts"

const App = () => {
	return (
		<>
			<GlobalFonts />
			<Heading />
			<Home />
		</>
	)
}

export default App
