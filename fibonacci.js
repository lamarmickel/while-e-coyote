const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a value for'num': "));

let count = 1;

let prevNum = 0;

let currentNum =1;

let total = 0



console.log(prevNum)

while (count < num){
   console.log(currentNum);
    total = prevNum + currentNum;
prevNum = currentNum;
    currentNum = total;
    count++;
}

