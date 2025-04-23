//two data types in js : 1. primitive data types 2. non-primitive data

// primitive data types : string, number, boolean, null, undefined, symbol, bigint
// non-primitive data types : object, array, function

//1.number
let num1 = 10; //integer
console.log(num1); //10
let t= typeof num1; //number
let s= `num1 = ${num1} and data type of num1 is ${t}`; 
console.log(s);

let num2 = 10.5; //float
console.log(num2); //10.5
let t1= typeof num2; //number
let s1= `num2 = ${num2} and data type of num2 is ${t1}`;
console.log(s1);

//2.string
let str1 = "hello"; //string
let str2 = 'hello2'; //string
let str3 = `hello3`; //string

//3.boolean
let bool1 = true; //boolean
let bool2 = false; //boolean
let bool3 = 1; //boolean
console.log(typeof bool3); 
console.log(typeof bool1); //boolean
let bool4 = 0; //boolean

//4.null
let n = null; //null
console.log(n); //null
console.log(typeof n); //object

//5.undefined
let u; //undefined
console.log(u); //undefined
console.log(typeof u); //undefined

//6.symbol
let uid= Symbol('uid'); //symbol
let cid= Symbol('uid'); //symbol
console.log(uid);
console.log(uid === cid); //false

//7. bigint
let bigint=5655225256665656565656565656565n; //bigint
console.log(bigint); 
console.log(typeof bigint); //bigint

//NON-PRMITIVE DATA TYPES

//1.array
let users=["ram","ravi",10,20];
console.log(users);

//2.object
let user={
    name:"ram",
    age:20,
    city:"delhi",
    isMarried:false
};
console.log(user);

