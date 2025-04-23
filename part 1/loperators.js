//logical operators in  javascript
// Logical operators are used to combine two or more conditions.
// The logical operators are:
// AND (&&), OR (||), and NOT (!). 

// The AND (&&) operator returns true if both operands are true, otherwise it returns false.

let n=10;
let m=20;
if(n>5 && m>15){
    console.log("Both conditions are true");
}
else{
    console.log("One or both conditions are false");
}

if(n<10 || m>15){
    console.log("One or both conditions are true");
}
else{
    console.log("Both conditions are false");
}

// The NOT (!) operator reverses the logical state of its operand.
// If the condition is true, it becomes false, and vice versa.

let x=true;
let y=false;
if(!x){
    console.log("x is false");
}
else{
    console.log("x is true");
}
