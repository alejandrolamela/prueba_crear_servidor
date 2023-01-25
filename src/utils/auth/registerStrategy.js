const User = require('../../api/users/user.model');
const bcrypt = require('bcrypt');
const { isValidEmail, isValidPassword } = require('../validations');




const LocalStrategy = require("passport-local").Strategy;

// const registerStragy = new LocalStrategy({}, async () => {}); (formato función)
const registerStragy = new LocalStrategy(
    {
        usernameField: "email", // el nombre del modelo de nuestro campo para identificar usuarios
        passwordField: "password",
        passReqToCallback: true, // en el controlador, passport.use('registro')(req) <-- ese req.
    },
    async (req, email, password, done) => {
      try {
        const userDB = await User.findOne({ email: email.toLowerCase() });

        if(userDB) {
            const error = new Error('El usuario ya existe');
            return done(error, null);
        }

        if(!isValidEmail(email)) {
            const error = new Error("El email no es válido");
            return done(error, null);
        }

        if(!isValidPassword(password)) {
            const error = new Error("La contraseña no cumple las reglas. 8 carácteres, 1 mayúscula y 1 número");
            return done(error, null);
        }

        /**
         * Ahora queda encriptar la contraseña del usuario y guardarlo en base de datos.
         */
        const saltRounds = 10;
        const encryptedPassword = await bcrypt.hash(password, saltRounds);

        const userToBeCreated = new User({
            ...req.body,
            email,
            password: encryptedPassword,
        });

        const created = await userToBeCreated.save();

        return done(null, created);

      } catch (error) {
        return done(error);
      } 
    }
);

module.exports = registerStragy;



// const User = require('../../api/users/user.model');
// const bcrypt = require('bcrypt');
// const { isValidEmail, isValidPassword } = require('../validations');

// const LocalStrategy = require('passport-local').Strategy;

// const registerStrategy = new LocalStrategy (
//     {
//         usernameField: 'email', //el nombre del modelo de nuestro campo para identificar usuarios
//         passwordField: 'password',
//         passReqToCallback: true, // en el controlador , passport.use('registro),(req) 

// }, 
// async(req, email, password, done) => {
//   try {
//     const userDB = await User.findOne({email: email.toLowerCase() });
//     if(userDB){
//         const error = new Error('El usuario ya existe');
//         return done(error, null);
//     };

//     if(!isValidEmail(email)){
//         const error = new Error('El email no es valido');
//         return done(error, null);

//     }

//     if(!isValidPassword(password)){
//         const error = new Error('La contraseña no es valido. 8 caracteres, 1 mayusucla y 1 numero');
//         return done(error, null);

//     }

//     //Ahora queda incriptar la contraseña del usuario y guardarlo en base de datos

//     const saltRounds = 10; //Esto signifa cuanto va incriptar mi contraseña
//     const encryptedPassword = await bcrypt.hash(password, saltRounds);

//     const userToBeCreated = new User({
//         ...req.body,
//         email,
//         password: encryptedPassword,
//     });

//     const created = await userToBeCreated.save();
//     return done(null, created);

//   } catch (error) {
//     return done(error);
//   }
// });

// module.exports = registerStrategy;