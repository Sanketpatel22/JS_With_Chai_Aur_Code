//Immeditely Invoked Function Expression
//IIFE is a function that runs as soon as it is defined

(function chai (){
    //named IIFE
    console.log("DB is connected");
})();

//wrap the function in parentheses and add () at the end

//IIFE is used to avoid polluting the global scope

( (name) => {
    console.log("DB is connected to " + name);
})("MongoDB");

