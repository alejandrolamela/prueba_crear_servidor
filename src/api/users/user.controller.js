
const passport = require('passport');
const User = require('./user.model');

const registerPost = (req, res, next)=> {
    try {
        //Esta funcion sirve por si hay algun error en el proceso de autentificacion. invocare a la funcion done, la llamo done porque es el estandar
        const done = (error, user) => {
            console.log('ueeee');
            if(error) return next(error);
            res.status(200).json(user);
        }
        
        passport.authenticate('registrito',done)(req);

    } catch (error) {
        return next(error);
    }
};

const loginPost = (req, res, next) => {
    try {
        return res.status(200).json('Login esta funcionando');
    } catch (error) {
        return next(error);
        
    }
};

module.exports = {
    registerPost,
    loginPost,
}