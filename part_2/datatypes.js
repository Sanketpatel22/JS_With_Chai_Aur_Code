//1. Primitive datatypes

//7 types of primitive datatypes
//1.string, 2.number, 3.boolean, 4.null, 5.undefined, 6.symbol, 7.bigint

const number = 454;
const string = "hello world";
const isLoggedin = true;
const bigNumber = BigInt(1234567890123456789012345678901234567890);


//2. Reference datatypes (or non-primitive datatypes)
//1. object, 2.array, 3.function, 4.date, 5.regexp, 6.error
//7. map, 8. set, 9. weakmap, 10. weakset

const heros = ["shaktiman", "naagraj", "batman", "superman"];

let myObject = {
    name: "shaktiman",
    age: 25,  
    isLoggedin: true,
    friends: ["naagraj", "batman", "superman"],
}

const myFunction = function() {
    console.log("hello world");
}

