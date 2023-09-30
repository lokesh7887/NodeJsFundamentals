const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('conenection is successful'))
.catch(err=>console.err('couldent connect to mongodb',err))

//schema
const  courseSchema=new mongoose.Schema({
    name:{type:String, required:true},//in this required is used for validating and we can use validate() function also
    /*tags:{type:array,validate:{validator:function(tags){return tags.length>1}}} */
    creator:String,//{type:string,required:true,enum:["data","python","java"]} this is used for in inbuilt validators                   
    publishDate:{type:Date,default:Date.now},
    isPublished:Boolean,
    rating:Number
})

const course =mongoose.model('course',courseSchema)

async function createCourse(){
    const Course=new course({
        name:'c++',
        creator:'sanil',
        isPublished:true,
        rating:3
    })
    const result=await Course.save()
    console.log(result)
}
//createCourse()


//eq (equal)
//gt(greater than)
//gte (greater than and equal to)
 //lt
 //lte

 //in
 //not in

 async function getCourse(){
    const courses=await (await course.find({rating:{$gte:4}}))
    console.log(courses)
 }
 getCourse()


 async function updateCourse(id){
    const Course=await course.findById(id)
    if(!Course) return;
   Course.name ='python'
const updatedCourse =await   Course . save ()
console.log("updated",updatedCourse);
 }
 updateCourse('650ec93938a03f2c330284fd')

 async function deleteCourse(id){
    const Course=await course.findByIdAndRemove(id)
    console.log(Course)
 }

 deleteCourse('650ec964a6cb0e15c5202119')