const fs=require('fs')
console.log("first line")
//this code will run by using the callback stack directly then gives us output

// let data = fs.readFileSync('f1.txt')
// console.log('file 1 data'+data)

fs.readFile('f1.txt',cb1)
//but this function will execute like this first it goes into the callback and then it g
//it goes to the node api(this is a waiting pase for that function then goes to the 
// callback queue and wait their and thir on evet loop is thir it has work like security guard for thos 
// functions after execution of all the function then this event loop will give the permission to enter 
//in the callback stack then this function will be going to execute)
function cb1(err,data){
    if(err){
        console.log(err)
    }
    
        console.log(data.toString())
    
}
fs.readFile('f2.txt',cb1)
function cb1(err,data){
    if(err){
        console.log(err)
    }
    
        console.log(data.toString())
        fs.readFile('f3.txt',cb1)// why we call this function in the another function 
        //because of the serial execution of the asyncronous function this will execute serailly
}

function cb1(err,data){
    if(err){
        console.log(err)
    }
    
        console.log(data.toString())
    
}

console.log("last line")