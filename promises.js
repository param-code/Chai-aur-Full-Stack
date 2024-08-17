const promiseone = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task is complete");
        resolve();
    },1000);
});
promiseone.then(()=> {
    console.log("Promise Fulfilled");
    document.querySelector('body').innerHTML += `<h2>Promise Received</h2>`;
});
// const promisetwo = new Promise();
// const promisethree = new Promise();
const promisefour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task is complete");
        const error = true;
        if(!error)resolve("Fulfilled");
        else reject("Not Fulfilled");
    },1000)
});
async function consumePromiseFour(){
    const response = await promisefour;
    console.log(response);
}
consumePromiseFour();