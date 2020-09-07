import React from "react"

import Main from "./components/Main"
import Container from "./components/Container"
import Officers from "./components/Officers"
import Leads from "./components/Leads"

const Members = () => (
	<>
		<Container>
			<Main />
			<Officers />
		</Container>
		<Leads />
	</>
)

export default Members
