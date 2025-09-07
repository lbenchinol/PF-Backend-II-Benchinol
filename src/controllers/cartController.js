import  CartsRepository  from "../repository/cartsRepository.js";

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

    //  Modifica un carrito segun ID
    static async agregarProductoAlCarrito(cid, pid, quantity) {
        try {

            //  ---------------------
            const cart = await Cart.findByIdAndUpdate(cid, { $push: { products: { product: pid, quantity } } }, { new: true, runValidators: true }).populate('products.product');
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

    //  Modifica un carrito segun ID
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

}