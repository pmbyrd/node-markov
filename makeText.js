/** Command-line tool to generate Markov text. */

//TODO - Imports
const fs = require("fs");
const axios = require("axios");
const markov = require("./markov");
const process = require("process");

//TODO - make a function to use the markov module to generate text
function generateText(text) {
  let mm = new markov.MarkovMachine(text);
  console.log(mm.makeText());
}
//TODO - Read in the file
//NOTE - same concept as the cat.js file
function  readFileFromPath(path) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
        console.log(`Error reading ${path}: ${err}`);
        process.exit(1);
        } else {
        generateText(data);
        }
    });
}
//TODO - make a function to read a URL and generate text from it
//NOTE - same concept as the cat.js file
async function readUrl(url) {
    let resp;
    try {
        resp = await axios.get(url);
        console.log(resp.data);
        generateText(resp.data);
    } catch (err) {
        console.log(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
    generateText(resp.data);
}

