import Cart from "../models/cart.model";

export class CartDAO {

    //  Obtiene un carrito segun ID
    static async getBy(filter = {}) {
        try {
            return await Cart.findOne(filter).populate('products.product');
        } catch (error) {
            throw new Error(`Error al obtener el carrito. ${filter ? filter : ''}`, error);
        }
    }

    //  Agrega un carrito nuevo
    static async create(product) {
        try {
            const cart = new Cart();
            await cart.save();
            return cart;
        } catch (error) {
            throw new Error(`Error al crear el carrito`, error);
        }
    }

    //  Modifica un carrito segun ID
    static async update(cid, product) {
        try {

        } catch (error) {
            throw new Error(`Error al modificar el carrito. ID: ${cid}`, error);
        }
    }

    //  Elimina un carrito segun ID
    static async delete(cid) {
        try {

        } catch (error) {
            throw new Error(`Error al eliminar el producto ID: ${pid} del carrito ID: ${cid}`, error);
        }
    }

}