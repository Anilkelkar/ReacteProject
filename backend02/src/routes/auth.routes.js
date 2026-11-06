const express = router('express');
const authController=require("../controllers/auth.controller")

const router =require.Router();
 
router.post('/user/register',authController.registerUser)
router.post('/user/login',authController.loginUser)


module.exports=router;
