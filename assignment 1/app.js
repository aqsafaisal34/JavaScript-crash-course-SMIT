Task1
let userInput1 = +prompt("Write a first number");
let userInput2 = +prompt("Write a second number");

if(userInput1 > userInput2){
    console.log(`Input1 is greater ${userInput1}`)
} else{
    console.log(`Input2 is greater ${userInput2}`)
}
Task2
let number = +prompt("Enter a number");

if (number >= 0) {
    console.log("The sign is +")
}else if(number < 0){
    console.log("The sign is -")
}else{
    console.log("Enter a valid number")
}
Task3

let num1 = +prompt("Enter 1st value");
let num2 = +prompt("Enter 2nd value");
let num3 = +prompt("Enter 3rd value");
let num4 = +prompt("Enter 4th value");
let num5 = +prompt("Enter 5th value");

let greaterNum = num1;

if (num2 > greaterNum) {
  greaterNum = num2;
}if (num3 > greaterNum) {
  greaterNum = num3;
}if (num4 > greaterNum) {
  greaterNum = num4;
}if (num5 > greaterNum) {
  greaterNum = num5;
}

console.log(greaterNum);

Task4
for (let i = 0; i <=15; i++){
    if(i % 2 === 0){
        console.log(`${i} is even`);
    } else{
        console.log(`${i} is odd`);
    }
}

Task5
let userPerctange = +prompt("Enter your percentage");

if (userPerctange < 60){
    console.log("Your Grade is F")
} else if (userPerctange < 70){
    console.log("Your Grade is D")
} else if(userPerctange < 80){
    console.log("Your Grade is C")
} else if (userPerctange < 90){
    console.log("Your Grade is B")
} else if(userPerctange < 100){
    console.log("Your Grade is A")
} else {
    console.log("Enter valid percenatage")
}

Task6
for(let i = 0; i <=100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} is FizzBuzz`)
    }else if(i % 5 === 0){
        console.log(`${i} is Buzz`)
    }else if(i % 3 === 0 ){
        console.log(`${i} is Fizz`)
    }else{
        console.log(i)
    }
}

Task7
for (let i = 0; i <=5; i++){
    let pattern = "";
    for (let j = i; j <= i; j++){
        pattern += "* "
    }
     console.log(pattern);
}