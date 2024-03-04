const express = require("express")

const app = express();

app.use(express.static('./website'))

app.get("/", (req, res) => {
    res.status(200).write("<h1>Welcome to Express</h1>")
    res.send();
})

app.get("/contact", (req, res) => {
    res.status(200).write("<h1>Welcome to Express Contact</h1>")
    res.send();
})

app.get("*", (req, res) => {
    res.status(400).write("<h1>Resource not found</h1><a href='/'>Back to Homepage</a>")
    res.send();
})

app.listen(5000, () => console.log("Server is running in http://localhost:5000/"))