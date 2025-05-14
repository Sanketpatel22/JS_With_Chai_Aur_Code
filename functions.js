function sayHello() {
  console.log("Hello");
}

// sayHello();

// function addTWoNumbers(a, b) {
//   console.log(a + b);
// }

//a and b are parameters and 2 and 3 are arguments (values passed to the function)

function addTWoNumbers(a, b) {
//   let sum = a + b;
//   return sum;
    return a + b;
}

const result = addTWoNumbers(2, 3);

// console.log(result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter your username");
        return;
    }
    return `Welcome ${username}`;
}

//console.log(loginUserMessage("John"));

function calculateCartPrice(...num1){
    return num1;
}

//here ... is called rest operator, it will accept any number of arguments and convert them into an array

// console.log(calculateCartPrice(100,200,300,400,500));

const user = {
    name: "John",
    age: 30,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}

// handleObject(user);

// handleObject({
//     name: "John",
//     age: 30,
// });


const myNewArray = [1, 2, 3, 4, 5];

function returnSecondElement(getarray){
    return getarray[1];
}

console.log(returnSecondElement(myNewArray));