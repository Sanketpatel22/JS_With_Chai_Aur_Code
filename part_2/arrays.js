//arrays in javascript

let arr = [1, 2, 3, 4, 5];

//methods 

arr.push(6); // adds 6 to the end of the array
console.log(arr); // [1, 2, 3, 4, 5, 6]
arr.pop(); // removes the last element of the array
console.log(arr); // [1, 2, 3, 4, 5]
arr.unshift(0); // adds 0 to the beginning of the array
console.log(arr); // [0, 1, 2, 3, 4, 5]
arr.shift(); // removes the first element of the array
console.log(arr); // [1, 2, 3, 4, 5]




//slice and splice in javascript

let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.slice(1, 3)); // [2, 3] // slice returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(arr2); // [1, 2, 3, 4, 5] // original array is not modified

console.log(arr2.splice(1, 3)); // [2, 3, 4] // splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified.
console.log(arr2); // [1, 5] // original array is modified

