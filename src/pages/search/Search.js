import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import home_data from "../home/assets/data.json"
import members_data from "../members/assets/data.json"
import subteams_data from "../subteams/assets/data.json"

const Search = () => {
	const location = useLocation()
	const query = new URLSearchParams(location.search).get("q")?.toLowerCase() || ""
	const allItems = []
	
	// home
	for(let i=0; i<home_data.hero.description.length; i++){
		allItems.push({ text: home_data.hero.description[i], parent: "Home" })
	}
	for(let i=0; i<home_data.about.entries.length; i++){
		allItems.push({ text: "<b>" + home_data.about.title + ":</b><br/>" + home_data.about.entries[i], parent: "Home" })
	}
	allItems.push({ text: "<b>" + home_data.sponsor.title + ":</b><br/>" + home_data.sponsor.description, parent: "Home" })

	// members
	for(let i=0; i<members_data.members.entries.length; i++){
		allItems.push({ text: members_data.members.entries[i].name + "<br/>" + members_data.members.entries[i].position, parent: "Members" })
	}
	for(let i=0; i<members_data.alumni.entries.length; i++){
		allItems.push({ text: members_data.alumni.entries[i].name + "<br/>" + members_data.alumni.entries[i].position, parent: "Members" })
	}

	//subteams
	for(let i=0; i<subteams_data.teams.length; i++){
		allItems.push({ text: "<b>" + subteams_data.teams[i].name + ":</b><br/>" + subteams_data.teams[i].description, parent: "Subteams" })
		for(let j=0; j<subteams_data.teams[i].subteams.length; j++){
			allItems.push({ text: "<b>" + subteams_data.teams[i].subteams[j].name + ":</b><br/>" + subteams_data.teams[i].subteams[j].description, parent: `Subteams, ${subteams_data.teams[i].name}` })
		}
	}

	// contact
	allItems.push({ text: "<b>Get in Touch:</b> <br/>" +
					"Email: tjhsstuav@gmail.com <br/>" +
					"Address: 6650 Braddock Rd, Alexandria, VA 22312 <br/><br/>" +
					"<b>Connect With Us: </b><br/>" +
					"GitHub: tj-uav <br/>" +
					"Instagram: @tjuav", parent: "Contact" })

	const [results, setResults] = useState([])

	useEffect(() => {
		if (query) {
			const filtered = allItems.filter(
				(item) =>
					item.text.toLowerCase().includes(query) ||
					item.parent.toLowerCase().includes(query)
			)
			setResults(filtered)
		} else {
			setResults([])
		}
	}, [query])

	return (
		<div style={{ fontFamily: "Arial, sans-serif", margin: "50px", maxHeight: "100%", overflowY: "auto" }}>
			<h1 style={{ color: "#333", textAlign: "center", marginBottom: "40px" }}>Search Results</h1>
			{results.length > 0 ? (
				<div>
					{results.map((result, index) => (
						<div key={index} style={{display: "inline-block", margin: "20px", backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px", width: "300px", verticalAlign: "top"}} >
							<div style={{ marginBottom: "10px" }} dangerouslySetInnerHTML={{ __html: result.text }}></div>
							<div style={{ fontSize: "0.9em", color: "#777" }}>Found in: {result.parent}</div>
						</div>
					))}
				</div>
			) : (
				<div style={{ textAlign: "center", color: "#999", margin: "50px" }}>No results found.</div>
			)}
		</div>
	)
}

export default Search
