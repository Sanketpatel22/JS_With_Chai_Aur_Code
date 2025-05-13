const marvelheroes = ["thor", "ironman", "hulk", "spiderman", "batman"];

const dcheroes = ["superman", "batman", "wonderwoman", "greenlantern", "flash"];

//marvelheroes.push(dcheroes);
//console.log(marvelheroes);

//array inside array (dcheroes inside marvelheroes)


//operations on two arrays

let AllHeroes = marvelheroes.concat(dcheroes);
console.log(AllHeroes);


//spread of array

let AllHeroes2 = [...marvelheroes, ...dcheroes];
console.log(AllHeroes2);

//flat method
const AnotherArray = [1,2,3,4, [5,6], [7,8,[9,10]]];
const AnotherArray2 = [AnotherArray.flat(Infinity)];
console.log(AnotherArray2);

//to convert another datatype to array
console.log(Array.isArray("Sanket"));
console.log(Array.from("Sanket"));


console.log(Array.from({name: "Sanket", age: 22})); //cant convert object to array, we have to specify that if we want array of keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //array of scores