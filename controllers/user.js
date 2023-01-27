require('dotenv').config()
const bcrypt = require('bcryptjs')
const {Router} = require("express")
const router = Router()
const jwt = require('jsonwebtoken')
//MAKE SURE CAPS MATCH ENV!
const secret = process.env.SECRET
const User = require('../model/user')
const auth = require('../auth/index')


router.get('/', (req,res) => {
    res.json({message: "WELCOME TO AUTH ROUTER"})
})


router.post("/signup", async(req,res)=>{
    try{
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const newUser = await User.create(req.body)
        res.status(200).json(newUser)
    }
    catch(error){
        res.status(400).json({error})
    }
})

router.post('/login', async(req,res) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({username})
        if (user){
            const match = await bcrypt.compare(password, user.password)
            if(match){
                const token = await jwt.sign({username}, secret)
                res.status(200).json({token})
            }else{
                res.status(400).json({error: "password does not match"})
            }
        }else{
            res.status(400).json({error: "USER DOES NOT EXIST"})
        }
    }
    catch(error){
        res.status(400).json({error})
    }
})

module.exports = router