import CartsRepository from "../repository/cartsRepository.js";
import CartsService from "../services/cartsService.js";

export default class CartController {

    //  Obtiene un carrito segun ID
    static async obtenerCarritoPorId(cid) {
        try {
            const cart = await CartsRepository.getCartById(cid);
            if (!cart) throw new Error(`Error al encontrar el carrito. ID: ${cid}`);
            return cart;
        } catch (error) {
            throw new Error(`Error al obtener el carrito. ID: ${cid}`, error);
        }
    }

    //  Agrega un carrito nuevo
    static async crearCarrito() {
        try {
            return await CartsRepository.createCart();
        } catch (error) {
            throw new Error(`Error al crear el carrito`, error);
        }
    }

    //  Agrega producto al carrito segun ID
    static async agregarProductoAlCarrito(cid, pid, quantity) {
        try {
            if (quantity < 1) throw new Error(`Error en la cantidad de productos.`);
            const cart = await CartsRepository.addProductOnCart(cid, pid, quantity);
            if (!cart) throw new Error(`Error al encontrar el carrito. ID: ${cid}`);
            return cart;
        } catch (error) {
            throw new Error(`Error al modificar el carrito. ID: ${cid}`, error);
        }
    }

    //  Modifica todo el carrito segun ID
    static async modificarTodoElCarrito(cid, newData) {
        try {
            const cart = await CartsRepository.updateWholeCart(cid, newData);
            if (!cart) throw new Error(`Error al encontrar el carrito. ID: ${cid}`);
            return cart;
        } catch (error) {
            throw new Error(`Error al modificar el carrito. ID: ${cid}`, error);
        }
    }

    //  Vaciar un carrito segun ID
    static async vaciarCarrito(cid) {
        try {
            const cart = await CartsRepository.cleanCart(cid);
            if (!cart) throw new Error(`Error al encontrar el carrito. ID: ${cid}`);
            return cart;
        } catch (error) {
            throw new Error(`Error al vaciar el carrito. ID: ${cid}`, error);
        }
    }

    // Elimina producto segun ID del carrito segun ID
    static async eliminarProductoDelCarrito(cid, pid) {
        try {
            const cart = await CartsRepository.deleteProductOnCart(cid, pid);
            if (!cart) throw new Error(`Error al encontrar el carrito. ID: ${cid}`);
            return cart;
        } catch (error) {
            throw new Error(`Error al eliminar el producto ID: ${pid} del carrito ID: ${cid}`, error);
        }
    }

    //  Modifica un producto del carrito segun ID
    static async modificarCantidadProductoDelCarrito(cid, pid, newQuantity) {
        try {
            if (newQuantity <= 0) {
                throw new Error('La cantidad debe ser mayor a cero.', error.message);
            }
            const cart = await CartsRepository.updateProductOnCart(cid, pid, newQuantity);
            if (!cart) throw new Error(`Error al encontrar el carrito. ID: ${cid}`);
            return cart;
        } catch (error) {
            throw new Error(`Error al modificar el carrito. ID: ${cid}`, error);
        }
    }

    //  Compra el carrito, crea un ticket y vacia el carrito
    static async comprarCarrito(cid) {
        try {
            return await CartsService.buyCart(cid);
        } catch (error) {
            throw new Error(`Error al comprar el carrito. ID: ${cid}`, error);
        }
    }

}