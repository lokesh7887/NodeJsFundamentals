// how to produce a promise

let myPromise = new Promise(function(resolve,reject){
    const a=3;
    const b=3;

    setTimeout(()=>{
        if(a===b){
            resolve('this is used when the function resolved')
        }
        else{
            reject()
        }
    },2000)
})
//pending state
// console.log(myPromise)

//fullfiled state
myPromise.then(function(result){
    console.log(result)
})
myPromise.catch(function(result){
    console.log(result)
    
})