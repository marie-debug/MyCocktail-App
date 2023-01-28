import mongoose from 'mongoose'

// Defining the user Schema
const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please add a name']
    },
    email: {
        type: String, 
        required: [true, 'Please add a email'],
        unique: true
    },
    password: {
        type: String, 
        required: [true, 'Please add a password']
    },
}, 
{
    timeStamps: true
})

// Defining the user Model
const UserModel = mongoose.model('User', userSchema)

export default UserModel