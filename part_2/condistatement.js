//conditional statement in javascript

//1. if statement 

let name = String(prompt("Enter your name"));
let age = Number(prompt("Enter your age"));
if (age>=18){
    console.log(`${name}, you are eligible to vote`)
}

//2. if else statement

if (age>=18){
    console.log(`${name}, you are eligible to vote`)
}
else {
    console.log(`${name}, you are not eligible to vote`)
}


//3. if else if statement

let marks = Number(prompt("Enter your marks"));
if (marks>=90){
    console.log("Grade A")
}
else if (marks>=80 && marks<90){
    console.log("Grade B")
}
else if (marks>=70 && marks<80){
    console.log("Grade C")
}
else if (marks>=60 && marks<70){
    console.log("Grade D")
}
else if (marks>=50 && marks<60){
    console.log("Grade E")
}
else if (marks>=40 && marks<50){
    console.log("Grade F")
}
else {
    console.log("Grade G")
}


//nested if statement
let number = Number(prompt("Enter a number"));
if (number>0){
    console.log("Positive number")
    if (number%2==0){
        console.log("Even number")
    }
    else {
        console.log("Odd number")
    }
}
else if (number<0){
    console.log("Negative number")
    if (number%2==0){
        console.log("Even number")
    }
    else {
        console.log("Odd number")
    }
}
else {
    console.log("Zero")
}

//switch statement
let signal = String(prompt("Enter a signal"));
switch (signal){
    case "red":
        console.log("Stop")
        break
    case "yellow":
        console.log("Ready")
        break
    case "green":
        console.log("Go")
        break
    default:
        console.log("Invalid signal")
}

