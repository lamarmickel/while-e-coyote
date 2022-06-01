const prompt = require('prompt-sync')({sigint: true});


console.log("Enter some numbers, type 'done' when complete: ");

let num1 = prompt("> ")

let total = 0;

while(num1 !== "done"){
    total = total + Number(num1);
    num1 = prompt("> ");
}

console.log("Your total is: " + total);


