const price = new Number(100);
console.log(price)

console.log(price.toString().length); //returns length of string
console.log(price.toFixed(2)); //only 2 digits after .

const OtherNumber = 23.26225
console.log(OtherNumber.toPrecision(3)); //round figure number 

const Hundreds = 100000;
console.log(Hundreds.toLocaleString()); //adds comma between as per US standards

console.log(Hundreds.toLocaleString('en-IN')); //adds comma between as per IND standards


//-----------------MATHS------------------------------

console.log("MATHS IN JAVASCRIPT")

console.log(Math);
console.log(Math.abs(-5)) //from negetive to positive

console.log(Math.round(4.59)) // round off to the nearest integer

console.log(Math.ceil(4.2)) //jo thodu bhi 4 karta vadhare hase to output 5 mlse

console.log(Math.floor(4.9)) //jp thodu bhi 5 karta ochu hse to ans 4 aavse

console.log(Math.min(4,5,9,7)) //min value from array
console.log(Math.max(4,5,7,9)) //max value from array

console.log(Math.random()) //random value between 1 and 0 (excluding 1 and including 0)


//simple code to generate random number between 1 to 10 (including 1 and 10)
let no;
no = (Math.random()*10)+1;
const finalno = Math.floor(no);
console.log(finalno);

//code to get random value between two desired numbers

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max-min+1)+min))

