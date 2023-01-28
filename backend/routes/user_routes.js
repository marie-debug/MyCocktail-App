import express from 'express'
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const router = express.Router()

// @desc    Register new user
// @route   POST / api/users
// @access  Public
router.post('/register', async (req, res) =>{
    const { name, email, password } = req.body

    try {
        const register = await UserModel.find()

        if (!register) {
            res.status(!register)
        } else {
            res.status(404).send('Please add all fields to register.')
        }

        // Check if the user exists
        const userExists = await User.findOne({email})
        if (userExists) {
            res.status(400)
        } else {
            res.status(404).send('User already exists')
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create user
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword
        })

        if (user) {
            res.status(201).json({
                _id: user.id, 
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        } else {
        res.status(400).send('Invalid user data')
        }
    } catch (err) {
        res.status(500).send('Please add all fields to register.')
    }
})

    
// @desc    Authenticate a user
// @route   POST / api/users/login
// @access  Public
router.post('/login', async (req, res) => {
    const {email, password} = req.body

    // Check for user email
    const user = await User.findOne({ email })

    try {
        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user.id, 
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error('Invalid credentails')
        }
    } 
    catch (err) {
        res.status(500).send({ error: err.message }) 
    }
})

// @desc    Get user data
// @route   GET / api/users/me
// @access  Private
router.get('/me', async (req, res) => {
    res.status(200).json(req.user)
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}

export default router