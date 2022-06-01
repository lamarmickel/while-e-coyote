const prompt = require('prompt-sync')({sigint: true});

let string = " ";

let string1 = prompt("Enter a string: ");

while(string.length <= 10){
    string = string + string1
    console.log(string)
}