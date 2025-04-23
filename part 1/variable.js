//variables are used to store data 
//var, let and const are used to declare variables

var n = 10; //var is used to declare a variable
console.log(n); //10
n = 20; //reassigning value to n
console.log(n); //20
var n = 30; //redeclaring variable n
console.log(n); //30


let n1 = 10; //let is used to declare a variable
console.log(n1); //10
// let n1 = 20; => redeclaring variable n1 will give an error
n1= 20; //reassigning value to n1
console.log(n1); //20

{
    var a=10; //var is function scoped
    let b=20; //let is block scoped
}
console.log(a); //10
//console.log(b); //ReferenceError: b is not defined

let c=10, d=20; //multiple variables can be declared in one line
console.log(c); //10
console.log(d); //20

const e=10; //const is used to declare a constant variable
console.log(e); //10
//e=20; //TypeError: Assignment to constant variable