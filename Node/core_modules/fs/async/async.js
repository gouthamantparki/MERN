const fs = require("fs")

fs.readFile("./content.txt", { encoding: "utf-8" }, (err, data) => {
    if(err) return "Something went wrong";
    console.log(data)
})

fs.writeFile("./content.txt", "Text Content\n", { flag: "a" }, (err) => {
    if(err) return "Something went wrong";
})