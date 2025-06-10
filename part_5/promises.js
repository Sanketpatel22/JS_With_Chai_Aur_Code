new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Promise resolved after 2 seconds');
        resolve();
},2000)
}).then(function() {
    console.log('This will run after the promise is resolved');
})

const promisetwo = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false;
    if (error) {
        reject('Error occurred');
    }
    else {
        resolve('Promise resolved successfully');
    }
},1000)
});

async function ConsumedPromiseTwo() {
    try {
        const response = await promisetwo;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

ConsumedPromiseTwo();