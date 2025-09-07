import passport from 'passport';
import passportJWT from 'passport-jwt';
import local from 'passport-local';

import config from './config.js';
import UserController from '../controllers/userController.js';

const findToken = (req) => {
    let token = null;
    return req.cookies.cookieToken ? token = req.cookies.cookieToken : token;
}

export const initPassport = () => {

    //  Current
    passport.use('current', new passportJWT.Strategy(
        {
            secretOrKey: config.secret,
            jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([findToken])
        },
        async (userToken, done) => {
            try {
                return done(null, userToken);
            } catch (error) {
                return done(error);
            }
        }
    ));

    //  Login
    passport.use('login', new local.Strategy(
        {
            usernameField: 'email'
        },
        async (username, password, done) => {
            try {
                let user = await UserController.obtenerUsuarioPorEmail(username);
                if (!user) return done(null, false);

                const checkedPassword = await UserController.confirmarContraseña(password, user._id);
                if (!checkedPassword) return done(null, false);

                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    ));
}