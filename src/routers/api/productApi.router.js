import express from 'express';
import { ProductsController } from '../../controllers/productController.js';

const productApiRouter = express.Router();

//  Obtiene productos
productApiRouter.get('/products/', async (req, res) => {
    try {
        const filters = req.query;
        const response = await ProductsController.obtenerProductos(filters);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Obtiene producto por ID
productApiRouter.get('/products/:pid', async (req, res) => {
    try {
        const pid = req.params.pid;

        const payload = await ProductsController.obtenerProductoID(pid);
        res.status(200).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Agrega un nuevo producto
productApiRouter.post('/products/', async (req, res) => {
    try {
        const newProduct = req.body;
        const payload = await ProductsController.crearProducto(newProduct);
        res.status(201).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Actualiza un producto por ID
productApiRouter.put('/products/:pid', async (req, res) => {
    try {
        const pid = req.params.pid;
        const updatedProduct = req.body;
        const payload = await ProductsController.modificarProductoID(pid, updatedProduct);
        res.status(200).json({ status: 'success', payload });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

//  Elimina un producto por ID
productApiRouter.delete('/products/:pid', async (req, res) => {
    try {
        const pid = req.params.pid;
        await ProductsController.eliminarProductoID(pid);
        res.status(200).json({ status: 'success' });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

export default productApiRouter;