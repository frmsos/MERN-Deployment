const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Enter your name"]
        },
        lastName: {
            type: String,
            required: [true, "Enter your last name"]
        },
        email: {
            type: String,
            required: [true, "Enter your email"],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email address"
            }
        },
        password: {
            type: String,
            required: [true, "Enter your password"],
            minlength: [8, "Password must have at least 8 characters or longer"]
        },
        confirmPassword: {
            type: String,
            required: [true, "Confirm your password"],
            minlength: [8, "Password must have at least 8 characters or longer"]
        }
    }, {timestamps: true});

//middleware
UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password, 10)
        const hashedConfirmedPassword = await bcrypt.hash(this.confirmPassword, 10)
       // console.log(" HashedPassword is: ", hashedPassword)
        this.password = hashedPassword
        this.confirmPassword = hashedConfirmedPassword
        next()
    }catch{
        console.log("Error creating user, please try again...", error)
    }
})


module.exports = mongoose.model('users', UserSchema)