//comparison operator in javascript
//==,===, !=, !==, >, >=, <, <=

let n=10;
let m=20;
let s='10';
console.log(n==m); //false
console.log(n!=m); //true

console.log(n==s); //true (in == operator datatype doesnt matters, it will only compare value inside)

console.log(n===s); //false (in === operator datatype matters, it will compare value and datatype both)

console.log(n>=m); //false
console.log(n<=m); //true
