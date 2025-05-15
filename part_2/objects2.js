const tinderUser = new Object();

tinderUser.id = 12345;
tinderUser.name = "Sanket";
tinderUser.isLoggedIn = true;


// console.log(tinderUser);

const RegularUser = {
    email: "sanket@gmail.com",
    fullName: {
        userName: "Sanket",
        lastName: "Patel"
    },
    isLoggedIn: false,   
}

// console.log(RegularUser.fullName);
// console.log(RegularUser.fullName.userName);

//combining two objects 

const obj1 ={
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}

const obj3 = Object.assign(obj1, obj2) //combines two objects
// console.log(obj3);

const obj4 = {...obj1, ...obj2} //combines two objects
// console.log(obj4);

const Course = {
    coursetitle: "Javascript",
    price: 199,
    instructor: "Sanket",
}

const {instructor} = Course; //destructuring
console.log(instructor);

const {coursetitle:title} = Course; //destructuring
console.log(title);
