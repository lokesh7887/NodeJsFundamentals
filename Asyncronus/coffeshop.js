function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
            resolve('order plcesed')
        }
        else{
            reject('order is not placed')
        }
    })
}
function processOreder(order){
    return new Promise(function(resolve){
        console.log('oreder is being processing')
        resolve(`${order} is served`)
    })
}

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderprocessed=processOreder(orderPlaced)
//     return orderprocessed
// }).then(function(processedOreder){
//     console.log(processedOreder)
// }).catch(function(err){
//     console.log(err)
// })//solution with promise


//asyn awit : why we use this keyword because we need to 
//avoid the chaing of promises such in above code happinning
//that why use async awit for avoif=ding chanining 

async function servered(){
   try {
    let orderplaced= await placeOrder('coffee')
    console.log(orderplaced)
    let processedOrder= await processOreder(orderplaced)
    console.log(processedOrder)
    
   } catch (error) {
    console.log(error)
   }
}
servered()