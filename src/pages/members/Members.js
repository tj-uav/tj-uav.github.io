import React from "react"

import Main from "./components/Main"
import Container from "./components/Container"
import Officers from "./components/Big Cards/Officers"
import Leads from "./components/Big Cards/Leads"

const Members = () => (
	<>
		<Container>
			<Main />
			<Officers />
			<Leads />
		</Container>
	</>
)

export default Members
