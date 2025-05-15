const userEmail = "sanket@mail.com";

if (userEmail) {
    console.log("User email is present");
    }
else {
    console.log("User email is not present");
    }

// here we are checking if the userEmail variable is truthy or falsy.

//truthy values are always true in js and falsey values are always false in js

// falsey values in js
// 0, "", null, undefined, NaN

// truthy values in js
// "0", " ", [], {}, true, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, function(){} 

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

//Nullish coalescing operator (??) : Null, undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 10;
console.log(val1); 

// if we call value from database and it is null or undefined then we can use nullish coalescing operator to assign default value

//let say i am getting location of user but due to some reason i am not getting the location then i can assign default value to it  


//ternary operator
// condition ? true : false

const price = 1000;
price > 1000 ? console.log("Price is greater than 1000") : console.log("Price is less than or equal to 1000");