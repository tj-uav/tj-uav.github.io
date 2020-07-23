import React from "react"
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom"
import Header from "components/Header"
import Footer from "components/Footer"
import Home from "pages/home/Home"
import Team from "pages/members/Members"
import GlobalFonts from "fonts/fonts"

const App = () => {
	return (
		<Router>
			<GlobalFonts />

			<Header />

			<Switch>
				<Route exact path="/home">
					<Home />
				</Route>

				<Route exact path="/members">
					<Team />
				</Route>

				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
			</Switch>

			<Footer />
		</Router>
	)
}

export default App
