//filter, map and reduce in javascript
//for each loop dose not return anything
//for each loop is used to iterate over an array
//for each loop is used to iterate over an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newnums = numbers.filter( (num) => num > 4)
console.log(newnums); // [5, 6, 7, 8, 9, 10]

numbers.forEach( (num) => {
    if (num > 4) {
        console.log(num);
        //newnums.push(num); 
    }
})


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }, 
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


//user apply filter of "filter by genre = fiction" 
const userbook = books.filter((bk)=> bk.genre ===
'Fiction')

console.log(userbook)

const userbooks = books.filter ((book) =>{ return book.publish >=1999 })

console.log(userbooks)

// const newNums = numbers.map((num) => num+10)
// console.log(newNums)


//chaining of methods
const newNums = numbers
                .map((num) => num*10)
                .map((num)=> num+1)
                .filter((num) => num >= 40)
console.log(newNums)

//reduce in js

const initialValue = 0;

const myTotal = numbers.reduce((accumalator, currentvalue)=> {
    console.log(`acc: ${accumalator} and curr : ${currentvalue}`)
    return accumalator + currentvalue
})

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "JS",
        price: 999,
    },

    {
        itemName: "Android",
        price: 1000,
    }


]

const total = shoppingCart.reduce((acc, item)=>acc + item.price,0)

console.log(total)