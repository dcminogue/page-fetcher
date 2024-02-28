const request = require('request');
const fs = require ('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const url = "http://www.example.edu/"
const filePath = "./index.html"

request(url, (error, response, body) => {
    if (error) {
        console.error('There was an error making the request', error);
        rl.close();
        return;
    } 
        if (response.statusCode !== 200) {
        console.error('Error: Code other than 200 detected.', response.statusCode);
        rl.close
        return;
} 

fs.writeFile(filePath, body, err => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    } rl.close();
})
});
