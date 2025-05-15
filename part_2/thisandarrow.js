const user = { 
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`); //this can be used to access the object properties  
        console.log(this) //this refers to the global object in non-strict mode
    // In strict mode, this is undefined 
    },
    
};

user.greet(); // Hello, my name is John

console.log(this) // this refers to the global object in non-strict mode
// In strict mode, this is undefined 

function one(){
    let username = 'John';
    console.log(this.username) //undefined bcs this does not work in function scope
}

// one();


// +++++++++++++++++++++++ Arrow Functions +++++++++++++++++++++++

const two = function() {
    let username = 'John';
    console.log(this.username) //undefined bcs this does not work in function scope
}

const three = () => { //=> is called arrow function
    let username = 'John';
    console.log(this.username) //undefined bcs this does not work in function scope
}

// three(); //undefined

// () => {} is an arrow function

// const addTWo = (a, b) => {
//     return a + b;
// }


// const addTWo = (a, b) => (a + b); // arrow function with implicit return

const addTWo = (a, b) => ({username : "John"})

console.log(addTWo(2, 3)) //5