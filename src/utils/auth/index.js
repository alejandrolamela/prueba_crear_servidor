const passport = require('passport');

const registerStrategy= require('./registerStrategy');

const activarAutentication = () => {
    passport.use('registrito', registerStrategy)
};



module.exports ={
    activarAutentication,
}