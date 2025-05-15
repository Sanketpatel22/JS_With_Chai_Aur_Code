const name = "sanket";
const age = 20;

//console.log(name + age)

console.log(`my name is ${name} and my age is ${age}`); // template string

console.log(name.length); // length of string   
console.log(name.toUpperCase()); // convert to upper case

console.log(name.charAt(1));

const newName = name.substring(0, 3); // substring from index 0 to 3
console.log(newName); // sank

const anotherName = name.slice(0,4);
console.log(anotherName);

const  userName = "  sanket  ";
console.log(userName);
console.log(userName.trim()); // remove white spaces from start and end of string
