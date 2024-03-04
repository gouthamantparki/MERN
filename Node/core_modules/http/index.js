const http = require('http')

// console.log(http);


const app = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.write("<h1>Welcome to the home page</h1>");
            res.end();
            break;
        case "/contact":
            res.write("<h1>Welcome to the contact page</h1>");
            res.end();
            break;
        default:
            res.write("<h1>Resource not found</h1>");
            res.end();
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})