const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.create({
    userName:{
        type:String,
        required:[true, "Username is required to create User"]
    },
    email:{
        type:String,
        required:[true, "Email is required to create User"],
        trim:true,
        lowercase:true,
        match:[
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email address"
        ],
        unique:[true,"Email already exists"]
    },
    password:{
        type:String,
        required:[true, "Password is required to create User"],
        minlength:[6,"Password must be at least 6 characters long"],
        select:false
    },
    
})

UserSchema.pre("save", async function(next){ //  check if password is modified than hash it and store it in database
    if(!this.isModified("password")){
        return next()
    }
    const hash = await bcrypt.hash(this.password,10)
    this.password = hash
    next()
})


UserSchema.methods.comparePassword = async function(password){ // compare password with hash
    return await bcrypt.compare(password, this.password)
}

const UserModel = mongoose.model("User",UserSchema)
module.exports = UserModel

