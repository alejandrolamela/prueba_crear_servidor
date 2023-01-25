//Ahora vamos a crear nuestro modelo de usuario

const mongoose = require('mongoose');
//Contruimos el esquema del modelo

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Debes introducir un email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Debes introducir una contraseña']
        },
        name: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);


//Exportamos el esquema
const User = mongoose.model('users', userSchema);
module.exports = User;