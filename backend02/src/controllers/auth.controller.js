const usermodel=require('../models/user.model');
const bcrypt =require('bcrypt');

async function registerUser(req,res) {
    const {fullname,Email,password}=req.body;

    const isUserAlreadyExists = await userModel.findOne({Email:Email})
    if(isUserAlreadyExistes){
        return res.status(400).json({
            message:"User already exists"
        })
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const usr =await usermodel.create({
        fullname,
        Email,
        password:hashedPasswordk
    
})
 const token=JWT.sign({
    id:user._id

 },"d9b3c2f0c5bf1a16a1ab9b9b02fe9141f20017b5")
 res.cookie("token",token,)
 res.status(201).json({
 message:"User registered successfully",
 user:{
    _id:user._id,
    email:user.email,
    fullname:user.fullname
}
 })
}

async function loginUser(req,res){
const{email,password}=req.body;
const user =await userModel.findOne({
    email
})
if(!user){
    return res.status(400).json({
        message:"Invalid email or password"
    })
}
const isPasswordValid =await bcrypt.compare(password,user.password);
if(!isPasswordValid){
    return res.status(400).json({
        message:"Inval email or password"
    })
}
const token =jwt.sign({
    id:user._id,

},"d9b3c2f0c5bf1a16a1ab9b9b02fe9141f20017b5")
}

async function logoutUser(req,res){
    
}

module.exports={
    registerUser,
    loginUser
}