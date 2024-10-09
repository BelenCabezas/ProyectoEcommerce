const mongoose=require('mongoose')
const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken')
const jsonwebtoken = require('jsonwebtoken')

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
        required:[true,'por favor ingrese su password'],
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

//encriptamos la contraseña
UsuariosSchema.pre('save', async function () {
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
    
})
//funcion para hashear los datos
UsuariosSchema.methods.getSignedJwtToken=function(){
    //firma para reconocer a la persona
    return jwt.sign({id:this._id}),process.env.JWT_SECRET,{expirein:process.env.JWT_EXPIRE}

}
module.exports = mongoose.model('Usuario',UsuariosSchema)

