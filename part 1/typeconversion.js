//type conversion in javascript
//two types of converison : implicit(automatic) and explicit(manual)

// 1. String to Number
let str = "123";
let num = Number(str); // 123
console.log(num); // 123

console.log('5'-'2'); // implicit conversion to number

console.log('5'+'2'); // concatenation will take place

num = parseInt("123.51"); // 123
console.log(num); //only integer part is taken

num = parseFloat("123.51"); // 123.51
console.log(num); //float part is also taken