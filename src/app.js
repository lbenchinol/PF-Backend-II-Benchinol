import express from 'express';
import http from 'http';
import { engine } from 'express-handlebars';
import { Server } from 'socket.io';
import cookieParser from 'cookie-parser';
import passport from 'passport';

import { connnectMongoDB } from './db/mongodb.js';
import config from './config/config.js';
import __dirname from '../dirname.js';
import { initPassport } from './config/passport.config.js';

import productApiRouter from './routers/api/productApi.router.js';
import cartApiRouter from './routers/api/cartApi.router.js';
import sessionsApiRouter from './routers/api/sessionsApi.router.js';

import viewsRouter from './routers/views/views.router.js';


//  CAMBIAR POR CONTROLLER
import ProductManager from './dao/productManager.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Conexion con MongoDB
connnectMongoDB();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// ---------------------------------------------------------
// Configuracion Passport
initPassport()
app.use(passport.initialize())

// ---------------------------------------------------------
// Configuracion Handlebars

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

// ---------------------------------------------------------
// Endpoints

app.use('/', viewsRouter);
app.use('/api', productApiRouter, cartApiRouter, sessionsApiRouter);


// ---------------------------------------------------------
// Websocket

io.on('connection', (socket) => {
    // Recibo de nuevo producto y envio de nuevo producto a todos
    socket.on('newProduct', async (newProductDOM) => {
        try {
            const newProduct = await ProductManager.addProduct(newProductDOM);
            socket.emit('addProduct', newProduct);
        } catch (error) {
            throw new Error(`Error al agregar el producto.`, error);
        }
    });

    // Recibo producto eliminado y envio producto a eliminar a todos
    socket.on('deleteProduct', async (deletedProductId) => {
        try {
            await ProductManager.deleteProductById(deletedProductId);
            socket.emit('deleteProductbyId', deletedProductId);
        } catch (error) {
            throw new Error(`Error al eliminar el producto.`, error);
        }
    });
});

// ---------------------------------------------------------

const PORT = config.port;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
