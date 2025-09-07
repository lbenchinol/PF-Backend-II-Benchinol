import express from 'express';
import passport from 'passport';

import ProductController from '../../controllers/productController.js';
import config from '../../config/config.js';
import { auth } from '../../middleware/auth.js';

const productApiRouter = express.Router();

//  Obtiene productos
productApiRouter.get('/products/', async (req, res) => {
    try {
        const filters = req.query;
        const response = await ProductController.obtenerProductos(filters);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Obtiene producto por ID
productApiRouter.get('/products/:pid', async (req, res) => {
    try {
        const pid = req.params.pid;
        const payload = await ProductController.obtenerProductoID(pid);
        res.status(200).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Agrega un nuevo producto
productApiRouter.post('/products/', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), auth(['admin']), async (req, res) => {
    try {
        const newProduct = req.body;
        const payload = await ProductController.crearProducto(newProduct);
        res.status(201).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Actualiza un producto por ID
productApiRouter.put('/products/:pid', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), auth(['admin']), async (req, res) => {
    try {
        const pid = req.params.pid;
        const updatedProduct = req.body;
        const payload = await ProductController.modificarProductoID(pid, updatedProduct);
        res.status(200).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Elimina un producto por ID
productApiRouter.delete('/products/:pid', passport.authenticate('current', { session: false, failureRedirect: `http://localhost:${config.port}/api/sessions/error` }), auth(['admin']), async (req, res) => {
    try {
        const pid = req.params.pid;
        await ProductController.eliminarProductoID(pid);
        res.status(200).json({ status: 'success' });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

export default productApiRouter;