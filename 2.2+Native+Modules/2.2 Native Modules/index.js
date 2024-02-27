
// write file

const fs = require("fs");

fs.writeFile("msg.txt", "Hello world", (err) => {
    if (err) throw err;
    console.log("File has been saved.");
});

// read file

fs.readFile("msg.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

