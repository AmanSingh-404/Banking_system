const mongoose = require('mongoose')
const UserModel = require('../model/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cookieParser = require('cookie-parser')

const registerController = async (req, res) => {
    const {userName, email, password} = req.body;

    if(!userName || !email || !password){
        return res.status(400).json({message:"All Field are required"})
    }
    const user = await UserModel.findOne({email})

    if(user){
        return res.status(400).json({message:"User Already Exists"})
    }
    
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"100h"})
    res.cookie("token",token)
}