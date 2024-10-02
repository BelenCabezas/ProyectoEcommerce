const mongoose=require('mongoose')
const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken')

const UsuariosSchema=new mongoose.Schema({
    name:{ 
        type:String,
        required:[true,'por favor ingrese el nombre']
    },
    email:{
        type:String,
        required:[true,'ingrese un email'],
        unique:true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'por favor ingrese un email valido'
        ]
    },
    role:{
        type:String,
        enum:['user','puplisher'],
        default:'user'
    },
    password:{
        type:String,
        required:[true,'por favor ingres su password'],
        minlength:6,
        select:false
    },
    resetPasswordToken:String,
    resetPasswordExpired:Date,
    createdAt:{
        type:Date,
        default:Date.now
    }

})
