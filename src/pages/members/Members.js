import React from "react"

import Main from "./components/Main"
import Container from "./components/Container"
import MemberCards from "./components/Big Cards/Members"
import Alumni from "./components/Big Cards/Alumni"

const Members = () => (
	<>
		<Container>
			<Main />
			<MemberCards />
			<Alumni />
		</Container>
	</>
)

export default Members
