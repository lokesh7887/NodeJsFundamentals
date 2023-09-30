const express=require('express');
const { Routes } = require('react-router-dom');
const router=express.Router()
const mongoose=require('mongoose')
 const Joi=require('joi')
const catrgoySchema=new mongoose.Schema({
    name:{type:String,required:true,minlength:3,maxlength:30}
})
const Category=new mongoose.model('Category',catrgoySchema)
const category=[
    {id:1,name:"web"},
    {id:2,name:"web1"},
    {id:3,name:"web2"},
    {id:4,name:"web3"},

]

router.get('/api/categories',(req,res)=>{
    res.send(category);
})
router.post('/api/categories',(req,res)=>{
    const {error} =validateData(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    const newCategory={
        id:category.length+1,
        name:req.body.name};
        category.push(newCategory);
        res.send(newCategory)
});
router.put('/api/categories/:id',(req,res)=>{
    let course = category.find(c=>c.id===parseInt(req.params.id))
   if(!course) res.status(404).send('the course your loking for is not present')
//    if(error) return res.status(404).send('the category with the given id was not present')

   course.name=req.body.name
   res.send(course)
})
router.delete('/api/categories/:id',(req,res)=>{
   let course=category.find(course=>course.id===parseInt(req.params.id))
   if(!course) return res.send(404).send('the course is not found')
   let index=category.indexOf(course)
category.splice(index,1)
    res.send(course)
})
router.get('/api/categories/:id',(req,res)=>{
   console.log(req.params)
  let course = category.find(course=>course.id===parseInt(req.params.id))
  
  if(!course) res.status(404).send('the course your loking for is not present')
  res.send(course)
})


function validateData(category){
    const schema= {
        name:Joi.string().min(3).required()
    }
}
module.exports=router;