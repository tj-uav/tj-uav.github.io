import React, { useEffect } from "react"
import { BrowserRouter as Router, Redirect, Switch, Route, useLocation } from "react-router-dom"
import Header from "components/Header"
import Footer from "components/Footer"
import SponsorList from "components/SponsorList"
import Home from "pages/home/Home"
import Members from "pages/members/Members"
import Subteams from "pages/subteams/Subteams.js"
import GlobalFonts from "fonts/fonts"

const App = () => {
	const headerHeight ="5.375rem";
	return (
		<Router style={{ scrollBehavior: "smooth" }}>
			<GlobalFonts />
			<Location />

			<Header headerHeight={headerHeight}/>

			<Switch>
				<Route exact path="/home">
					<Home />
				</Route>

				<Route exact path="/members">
					<Members />
				</Route>
				
				<Route exact path="/subteams">
					<HeaderPlaceholder height={headerHeight}/>
					<Subteams />
				</Route>

				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
			</Switch>

			<SponsorList />
			<Footer />
		</Router>
	)
}

// Basically, the header is removed from the page so elements won't snap below it,
// insert this before a page that does not use grid containers to make sure the header isn't covering anything
function HeaderPlaceholder({height, ...props}){
	 //this variable is needed because the header is absolutely positioned
	return(
		<div style={{height:height, width:"100%"}}/>
	)
}

const Location = () => {
	const location = useLocation()

	useEffect(() => {
		try {
			// eslint-disable-next-line no-unused-vars
			const [whole, title, first] = /\/((\w)\w*)$/i.exec(location.pathname)
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
