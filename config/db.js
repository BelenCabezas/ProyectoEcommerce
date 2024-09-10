//requiero el uso de mongoose
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Base de datos conectada correctamente".green);
    } catch (error) {
        console.error("Error al conectar la base de datos:", error);
        process.exit(1); // Detenemos la aplicación si falla la conexión
    }
};

module.exports = connectDB;
