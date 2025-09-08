import express from 'express';
import passport from 'passport';

import CartController from '../../controllers/cartController.js';
import config from '../../config/config.js';
import { auth } from '../../middleware/auth.js';

const cartApiRouter = express.Router();

//  Crear un carrito
cartApiRouter.post('/carts/', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), auth(['admin']), async (req, res) => {
    try {
        const payload = await CartController.crearCarrito();
        res.status(201).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Obtiene productos de un carrito por ID
cartApiRouter.get('/carts/:cid', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), auth(['user', 'admin']), async (req, res) => {
    try {
        const { cid } = req.params;
        const payload = await CartController.obtenerCarritoPorId(cid);
        res.status(200).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Agrega en el carrito por ID un producto por ID
cartApiRouter.post('/carts/:cid/product/:pid', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), auth(['user']), async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const quantity = req.body.quantity || 1;
        const payload = await CartController.agregarProductoAlCarrito(cid, pid, quantity);
        res.status(200).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Elimina del carrito por ID un producto por ID
cartApiRouter.delete('/carts/:cid/product/:pid', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), auth(['user']), async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const payload = await CartController.eliminarProductoDelCarrito(cid, pid);
        res.status(200).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Vacia el carrito por ID
cartApiRouter.delete('/carts/:cid', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), auth(['user']), async (req, res) => {
    try {
        const { cid } = req.params;
        const payload = await CartController.vaciarCarrito(cid);
        res.status(200).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Actualiza todos los productos del carrito por ID
cartApiRouter.put('/carts/:cid', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), auth(['user']), async (req, res) => {
    try {
        const { cid } = req.params;
        const newData = req.body;
        const payload = await CartController.modificarTodoElCarrito(cid, newData);
        res.status(200).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Actualiza quantity del producto por ID del carrito por ID
cartApiRouter.put('/carts/:cid/product/:pid', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), auth(['user']), async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const newQuantity = req.body.quantity;
        const payload = await CartController.modificarCantidadProductoDelCarrito(cid, pid, newQuantity);
        res.status(200).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Compra el carrito por ID
cartApiRouter.post('/carts/purchase/', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), auth(['user']), async (req, res) => {
    try {
        const cid = req.user.cart;
        const payload = await CartController.comprarCarrito(cid);
        res.status(200).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

export default cartApiRouter;