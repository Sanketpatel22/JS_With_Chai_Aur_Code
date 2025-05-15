// for loop

for (let i = 0; i < 10 ; i++) {

    console.log(i);

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     
    for (let i = 0; i < array.length;  i++) {
        console.log(array[i]);
        
    }
}

//break and continue

//break : it will break the loop
//continue : it will skip the current iteration and move to next iteration


for (let i = 0; i < 10 ; i++) {
    
    if (i === 5) {
        console.log("5 detected");
        break;
    }
    console.log(i);


}