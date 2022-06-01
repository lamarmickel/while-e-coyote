const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a number. This number will be repeatedly doubled until it is greater than or equal to 100: "));


while (num <= 100){
    num = num * 2
    console.log(num)
}
