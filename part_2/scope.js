// let a = 10;
// const b = 20;
// var c = 30;

// {} is called block scope

var c = 300;
let a = 100; //global scope

if (true) {
    let a = 10;
    const b = 20; // block scope
    var c = 30;
    console.log("INNER A: ", a); // 10
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log("C :", c); // 30
// console.log("A :", a); // 100


function one(){
    const username = "John";

    function two(){
        const website = "example.com";
        console.log("Username: ", username); // John
    }

    //console.log("Website: ", website); // ReferenceError: website is not defined

    two();
}

one();


// +++++++++++++++++++++ INTERESTING ++++++++++++++++++++++

// Hoisting

 console.log(addOne(5));

function addOne(num){
    return num + 1;
}

console.log(addOne(5)); 


// console.log(addTwo(5));   ReferenceError: Cannot access 'addTwo' before initialization


const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));  