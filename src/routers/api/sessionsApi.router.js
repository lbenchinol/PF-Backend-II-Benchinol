import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import config from '../../config/config.js';
import UserController from '../../controllers/userController.js';
import UsersDTO from '../../dto/usersDTO.js';

const sessionsApiRouter = express.Router();

//  Mensaje de Error
sessionsApiRouter.get('/sessions/error', async (req, res) => {
    return res.status(400).json({ error: `Error al autenticar` });
});

//  Login del user
sessionsApiRouter.post('/sessions/login', passport.authenticate('login', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), async (req, res) => {
    try {
        const token = jwt.sign(req.user, config.secret, { expiresIn: '1h' });
        res.cookie('cookieToken', token, { httpOnly: true });
        res.status(200).json({ status: 'success', payload: req.user });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

//  Logout del user
sessionsApiRouter.get('/sessions/logout', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), async (req, res) => {
    try {
        res.clearCookie('cookieToken');
        res.status(200).json({ status: 'success' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

//  Validacion del user
sessionsApiRouter.get('/sessions/current', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), async (req, res) => {
    try {
        const payload = await UsersDTO.getUserByEmail(req.user.email);
        res.status(200).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

//  Register
sessionsApiRouter.post('/sessions/register', async (req, res) => {
    try {
        const newUser = req.body;
        const payload = await UserController.crearUsuario(newUser);
        res.status(201).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

export default sessionsApiRouter;