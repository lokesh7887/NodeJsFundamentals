const express=require('express')
const categories1=require('./Routes/categories')
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('conenection is successful'))
.catch(err=>console.err('couldent connect to mongodb',err))

const app=express()
app.use(express.json());
app.use(categories1)

const port = process.env.PORT || 3000

app.listen(port,()=> console.log(`this port is running on ${port}`))