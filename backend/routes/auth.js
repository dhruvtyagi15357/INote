const express = require('express')
const User = require('../models/User')
const router = express.Router()

const { body, validationResult } = require('express-validator')


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
        const user = User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        }).then(user => res.json(user) )
        .catch(
            err => {console.log(err)
            res.json({
                error: "Sorry, a user with this email already exist.",
                message: err.message,
            })
        })
    } catch (err){
        // console.log(err)
        res.status(500).send("Some Error Occoured")
    }
})

module.exports = router