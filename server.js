//app.js
const express = require("express")
// const http = require("http")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, "build")))

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(process.env.PORT || 8000, function() {
    console.log("Express server started");
});

// const port = process.env.PORT || "8080"
// app.set("port", port)

// const server = http.createServer(app)

// server.listen(port, () => console.log(`Running on localhost:${port}`))
