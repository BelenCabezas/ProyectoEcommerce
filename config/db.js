const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Base de datos conectada correctamente");
    } catch (error) {
        console.error("Error al conectar la base de datos:", error);
        process.exit(1); // Detenemos la aplicación si falla la conexión
    }
};

// Exportamos la función para usarla en otros archivos
module.exports = connectDB;
