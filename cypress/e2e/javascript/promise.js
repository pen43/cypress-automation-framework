let promise = new Promise((resolve, reject) => 
{
    let a = 2;

    if(a == 2)
    {
        resolve("Promise Fulfilled");
    }
    else
    {
        reject("Promise not fulfilled");
    }

})

promise.then((message) => 
{
    console.log("Promise has passed!");
}).catch((message) => 
{
    console.log("Promise has failed...");
})

/// A promise has three states initial the pending and Fulfilled or Unfullfiled