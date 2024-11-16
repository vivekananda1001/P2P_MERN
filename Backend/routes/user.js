const { Router } = require('express');
const bcrypt=require("bcryptjs")
const jwt = require('jsonwebtoken')
const { JWT_USER_PASSWORD } = require("../config");
const { userModel } = require('../models/user')
const { userMiddleware } = require('../middlewares/user') 

router.post("./signin",async (req,res)=>{
    try{
        const { username, password } = req.body;
        const user =  await userModel.findOne({
            username: username,
            password: password
        });

        const token = jwt.sign({
            id: user._id
        },JWT_USER_PASSWORD);

        res.json({
            token:token,
            message: `Namaste ${username} !`
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err.message})
    }
})

router.post("./signup",async(req,res)=>{
    const { username, password } = req.body;
    
    await userModel.create({
        username: username,
        password: password
    })

    res.json({
        message : `Namaste ${username}, you have been succesfully signed up,`
    })
})

