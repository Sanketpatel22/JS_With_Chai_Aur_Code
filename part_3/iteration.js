// for loop

// for (let i = 0; i < 10 ; i++) {

//     console.log(i);

//     let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     
//     for (let i = 0; i < array.length;  i++) {
//         console.log(array[i]);
        
//     }
// }

// //break and continue

// //break : it will break the loop
// //continue : it will skip the current iteration and move to next iteration


// for (let i = 0; i < 10 ; i++) {
    
//     if (i === 5) {
//         console.log("5 detected");
//         break;
//     }
//     console.log(i);


// }

// while loop

// let index = 0;
// while (index < 10) {
//     console.log("index: ", index);
//     index++;  
// }

// do loop
// let score = 0;
// do {
//     console.log("score: ", score);
//     score++;
// } while (score < 10);


// for of loop


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of arr) {
    console.log(num);
}

const str = "hello world";
for (const greet of str) {
    console.log(`Each char is ${greet}`);
}

//maps

const map = new Map()
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

console.log(map);

for (const [key, value] of map) {
    console.log(key,value);
    
}

const myObj = {
    name: "John",
    age: 30,
    city: "New York"
};

//NOT WORKING
// for (const [key,value] of myObj) {
//     console.log(key, value);
// }

//for in loop

for (const key in myObj) {
   console.log(`${key} is ${myObj[key]}`);
}

const programming = ["js", "python", "java", "c++", "c#"];

for (const key in programming) {
    console.log(programming[key]);
}


// map is non iterable 
// for (const key in map) {
//     console.log(key);
// }

const coding = ["js", "python", "java", "c++", "c#"];

coding.forEach( function (item) {
    console.log(item);
} )

coding.forEach( (item) => {
    console.log(item);
})

const myCoding = [
    {
        name: "js",
        age: 10,
        city: "New York"
    },
    {
        name: "python",
        age: 20,
        city: "New York"
    },
    {
        name: "java",
        age: 30,
        city: "New York"
    }
]

myCoding.forEach((item) => {
    
    console.log(item.name);
})