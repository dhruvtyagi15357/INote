const express = require('express')
const User = require('../models/User')
const router = express.Router()

const { body, validationResult } = require('express-validator')


//create a user using: POST "/api/auth"  doesn't require auth
router.post('/', [
    body('email', "Enter valid email!").isEmail(),
    body('name').isLength({min:2, max:10}),
    body('password').isLength({min:5})
],(req, res) =>{
    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    const user = User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    }).then(user => res.json(user))
    .catch(
        err => {console.log(err)
        res.json({
            error: "Please enter unique value",
            message: err.message,
        })
    })

})

module.exports = router