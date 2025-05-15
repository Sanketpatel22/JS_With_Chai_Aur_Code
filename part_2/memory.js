//stack mermory and heap memory
  
// stack memory : primitive 
// heap memory : non primitive

// when any value is fetched from stack memory, it's copy is provideed to the variable instead of the reference of the value.

// so changes in the value of the variable will not affect the original value in the stack memory.

// when any value is fetched from heap memory, it's reference is provided to the variable instead of the copy of the value.

// but here changes in the value of the variable will affect the original value in the heap memory.
// so the value in the heap memory will be changed.

let userOne = { 
    name: "John",
    age: 30,
};

let userTwo = userOne; // here userTwo is a reference to the object in heap memory

userTwo.name = "Doe"; // here we are changing the value of the object in heap memory
console.log(userOne.name); // Doe