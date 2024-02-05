const express = require('express')
const User = require('../models/User')
const router = express.Router()
const bcrypt = require("bcryptjs")
const { body, validationResult } = require('express-validator')

const jwt = require("jsonwebtoken")
const JWT_SECRET = "Dhruv is a good $oy"

//create a user using: POST "/api/auth/createuser"  no login required
router.post('/createuser', [
    body('email', "Enter valid email!").isEmail(),
    body('name').isLength({min:2, max:50}),
    body('password').isLength({min:5})
],async (req, res) =>{
    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    try{
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        
        const salt = await bcrypt.genSalt()
        const securepass = await bcrypt.hash(req.body.password, salt)
        
        user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:securepass,
        })
        
        const data = {
            user: {
                id: user.id
            }
        }
        
        const authToken = jwt.sign(data, JWT_SECRET)
        console.log(authToken)
        res.json({authToken})



        
    } catch (err){
        // console.log(err)
        res.status(500).send(err.message)
    }
})

module.exports = router