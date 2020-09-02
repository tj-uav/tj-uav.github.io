import React from "react"
import { BrowserRouter as Router, Redirect, Switch, Route, useLocation } from "react-router-dom"
import Header from "components/Header"
import Footer from "components/Footer"
import Home from "pages/home/Home"
import Members from "pages/members/Members"
import GlobalFonts from "fonts/fonts"

const App = () => {
	return (
		<Router>
			<GlobalFonts />
			<Location />

			<Header />

			<Switch>
				<Route exact path="/home">
					<Home />
				</Route>

				<Route exact path="/members">
					<Members />
				</Route>

				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
			</Switch>

			<Footer />
		</Router>
	)
}

const Location = () => {
	const location = useLocation()

	React.useEffect(() => {
		const title = location.pathname.match(/(?<=[/])([a-z])[a-z]*$/i)
		const page = title[0].replace(title[1], title[1].toUpperCase())
		document.title = `TJUAV | ${page}`
	}, [location])

	return null
}

export default App
