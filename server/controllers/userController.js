const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// signup

const signUp = async (req, res) => {
    try {
        const { name, email, password, reTypePassword, role } = req.body

        if (!name) {
            return res.status(400).json({ message: 'Please provide the username' })
        }
        if (!password) {
            return res.status(400).json({ message: 'Please provide the password' })
        }
        if (!email) {
            return res.status(400).json({ message: 'Please provide an email' })
        }


        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "Existing User..Kindly Login" })
        }


        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name, email, password: hashedPassword, role
        })

        await newUser.save()
        // alert("")
        res.status(201).json({ message: 'Signup Sucessfull, Redirecting to login page' })


    } catch (error) {
        console.log('Login error:', error);
        res.status(500).json({ message: 'Server Error' })
    }
}

//login

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        if (!password) {
            return res.status(400).json({ message: 'Please provide the password' })
        }
        if (!email) {
            return res.status(400).json({ message: 'Please provide an email' })
        }

        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(404).json({ message: 'User does not exist. Kindly Signup first' })
        }

        const passwordMatched = await bcrypt.compare(password, existingUser.password)
        if (!passwordMatched) {
            return res.status(401).json({ message: 'Invalid password' })
        }

        const token = jwt.sign({ userid: existingUser.id, email: existingUser.email }, process.env.JWT_SECRET, { expiresIn: '1d' })


        res.status(200).json({
            user: { userid: existingUser.id, name: existingUser.name, email: existingUser.email },
            token,
            message: `Login Sucess, Welcome to ATMOS- ${existingUser.name}`
        })
    } catch (error) {
        res.status(500).json({ message: 'Server error.PLease try again' })


    }



}


module.exports = { signUp, login }