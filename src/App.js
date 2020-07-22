import React from "react"
import Nav from "./components/Nav"
import Home from "./Home"
import Footer from "./components/Footer"

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Nav />
            </header>
            {/* page goes here */}
            <Home />
            {/* page goes here */}
            <Footer />
        </div>
    )
}

export default App