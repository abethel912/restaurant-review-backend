require('dotenv').config()
const bcrypt = require('bcryptjs')
const {Router} = require("express")
const router = Router()
const jwt = require('jsonwebtoken')
const { useResolvedPath } = require('react-router-dom')
const secret = process.env.secret

router.get('/', (req,res) => {
    res.json({message: "WELCOME TO AUTH ROUTER"})
})

// router.post("/signup", async(req,res)=>{
//     try{
//         req.body.password = await bcrypt.hash(req.body.password, 10)
//     }
// })

module.exports = router