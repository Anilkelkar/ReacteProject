const mongoose =require('mongoose');


function connectDB(){
    mongoose.connect("mongodb://locahost:27017/mydatabase")
    .then(()=>{})
    .catch((err)=>{
        console.log('Database connection error:', err);
    })}

module.exports=connectDB;