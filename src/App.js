import React, { useEffect } from "react"
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

	useEffect(() => {
		try {
			const [title, first] = /(?<=[/])(\w)\w*$/i.exec(location.pathname)
			const page = title.replace(first, first.toUpperCase())
			document.title = `TJUAV | ${page}`
		} catch (e) {
			if (e instanceof TypeError && e.message.includes("iterable")) {
				return
			} else {
				console.error(e)
			}
		}
	}, [location])

	return null
}

export default App
