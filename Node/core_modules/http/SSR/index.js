const http = require("http");
const fs = require("fs");

const indexPage = fs.readFileSync("./website/index.html", { encoding: "utf-8" })

http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(indexPage);
        res.end();
    }
    else {
        res.write("<h1>Something went wrong</h1><a href='/'>Back to homepage</a>")
        res.end();
    }
}).listen(5000, () => {
    console.log("Server is running in: 'http://localhost:5000/'")
})