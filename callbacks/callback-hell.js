const { log } = require("console");
const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }
  const modifyFileData = data.toUpperCase();
  
  fs.writeFile("output.txt", modifyFileData, (err) => {
    if (err) {
      console.log("Getting the error in writting file", err);
      return;
    }
    console.log("Data written to that new file");

    fs.readFile("output.txt", "utf8", (err, data) => {
      if (err) {
        console.log("Error reading file", err);
        return;
      }
      console.log(data);
    });
  });
});
