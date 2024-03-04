const fs = require("fs");


let fileContent = fs.readFileSync("./content.txt", { encoding: "utf-8" })
console.log(fileContent)

fs.writeFileSync("./content.txt", "Text Content\n", { flag: "a" })