const express=require('express')
const {postRegistrar,postLogin,getLogin,getRegistrar} =require('../controllers/auth')
const router=express.Router()


router.route('/register').get(getRegistrar).post(postRegistrar)
router.route('/login').get(getLogin).post(postLogin)

module.exports=router