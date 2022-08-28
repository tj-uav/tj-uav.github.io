import React from "react"
import data from "./assets/data"
import Hero from "./content/Hero"
import About from "./content/About"
import Auvsi from "./content/Auvsi"
import Interest from "./content/Interest"
import Sponsoring from "./content/Sponsoring"
//import ContactSponsors from "./content/ContactSponsors"

const Home = () => {
	return (
		<>
			<Hero content={data.hero} />
			<Auvsi />
			<About content={data.about} />
			<Interest />
			<Sponsoring />
			{/*<ContactSponsors content={data} />*/}
		</>
	)
}

export default Home
