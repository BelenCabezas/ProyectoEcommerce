const Usuario=require('../model/Usuarios')

//@desc   MOSTRAR Registrar Usuarios Nuevos
//@route  GET /api/v1/auth/register
//@access Publico


exports.getRegistrar=async(req,res,next)=>{
    try{
        res.render('register')
        // res.status(200).json({resultado:true,mensaje:'muestro la pagina de registro',datos:productos})            
    }catch(error){
        res.status(400).json({mensaje:'no funciono'})

    }
}

//@desc   ENVIAR Registrar Usuarios Nuevos
//@route  POST /api/v1/auth/register
//@access Publico

exports.postRegistrar=async(req,res,next)=>{
    try{

        const {name,email,password,role}=req.body
            const user=await Usuario.create({
                name,email,password,role
            })
            const token=user.getSignedJwtToken()
            // Este token generalmente se utiliza para autenticar al usuario en solicitudes futuras.
       
        //res.render(register)
        res.status(200).json({resultado:true,mensaje:'los datos se enviaron correctamente',datos:user,token})            
    }catch(error){
        console.log(error)
        res.status(400).json({mensaje:'no funciono'})

    }
}


//@desc   MOSTRAR login Usuario
//@route  GET /api/v1/auth/login
//@access Publico
exports.getLogin = async (req, res, next) => {
    try {
        // Renderiza la página de login
        res.render('login'); 
    } catch (error) {
        console.log(error);
        // En caso de error, devuelve un mensaje de error
        res.status(400).json({ mensaje: 'No se pudo mostrar la página de login' });
    }
};


//@desc   ENVIAR login Usuario
//@route  POST /api/v1/auth/login
//@access Publico

//Se realiza la autenticacion del usuario
exports.postLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validar que se hayan ingresado el email y la contraseña
        if (!email || !password) {
            return res.status(400).json({ mensaje: 'Por favor ingrese el email y la contraseña' });
        }

        // Buscar al usuario por email
        const user = await Usuario.findOne({ email }).select('+password'); // Asegura traer la contraseña cifrada

        // Si el usuario no existe
        if (!user) {
            return res.status(400).json({ mensaje: 'El usuario no está registrado' });
        }

        // Comparar la contraseña ingresada con la almacenada en la base de datos
        const esPasswordCorrecto = await user.matchPassword(password);

        if (!esPasswordCorrecto) {
            return res.status(400).json({ mensaje: 'La contraseña es incorrecta' });
        }

        // Enviar el token en la respuesta usando la función sendTokenResponse
        sendTokenResponse(user, 200, res);

    } catch (error) {
        console.log(error);

        res.status(400).json({ mensaje: 'Hubo un error durante el inicio de sesión' });
    }
};
    //seccion token
    const sendTokenResponse = (usuario, statusCode, res) => {
        // Creo un token
        const token = usuario.getSignedJwtToken();
    
        // Opciones para la cookie
        const options = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000), //18/09/2024 --> 30 dias -->esto finaliza
            httpOnly: true, // La cookie solo se puede acceder a través del protocolo HTTP
            secure: process.env.NODE_ENV === 'production' // Solo usar cookies seguras (https) en producción
        };
    
        // Enviar la cookie con el token y responder con el token en JSON
        res.status(statusCode)
            .cookie('token', token, options) // Enviar el token en una cookie
            .json({
                resultado: true,
                mensaje: 'Inicio de sesión exitoso',
                token
            });
    };
    

