import React from "react"
import data from "./assets/data"
import Hero from "./content/Hero"
import Cards from "./content/Cards"
import About from "./content/About"
import ContactSponsors from "./content/ContactSponsors"

const Home = () => {
	return (
		<>
			<Hero content={data.hero} />
			<Cards content={data.info.cards} />
			<About content={data.about} />
			<ContactSponsors id="sponsor" content={data} />
		</>
	)
}

export default Home
