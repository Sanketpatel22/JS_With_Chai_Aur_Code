//two ways of object creation
// 1. object literal
// 2. object constructor

//object literals

//Object.create //object constructor

const mySym = Symbol("key")

const user = {
    id : 15248,
    name: "Sanket",
    "full name": "Sanket Patel", //cant access with dot operator
    age: 22,
    location: "India",
    [mySym]: "Sanket",
    email: "sanket@google.com",
    isLoggedIn: true,
    LastLogin: ["Monday", "Saturday", "Sunday"]
}

console.log(user.name);
console.log(user["email"]);
console.log(user["full name"]); //accessing with bracket notation

console.log(typeof [mySym])
Object.freeze(user) //freezes the object, no changes can be made

