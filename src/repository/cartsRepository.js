import CartDAO from "../dao/cartsDAO.js";

export default class CartsRepository {

    //  Obtiene un carrito segun ID
    static async getCartById(cid) {
        try {
            return await CartDAO.getBy({ _id: cid });
        } catch (error) {
            throw new Error(`Error al obtener el carrito. ID: ${cid}`, error);
        }
    }

    //  Agrega un carrito nuevo
    static async createCart() {
        try {
            return await CartDAO.create();
        } catch (error) {
            throw new Error(`Error al crear el carrito`, error);
        }
    }

    //  Agrega un producto al carrito segun ID
    static async addProductOnCart(cid, pid, quantity) {
        try {
            return await CartDAO.update({ _id: cid }, { $push: { products: { product: pid, quantity } } });
        } catch (error) {
            throw new Error(`Error al modificar el carrito. ID: ${cid}`, error);
        }
    }

    //  Modifica un carrito segun ID
    static async updateWholeCart(cid, update) {
        try {
            return await CartDAO.update({ _id: cid }, { $set: { products: update } });
        } catch (error) {
            throw new Error(`Error al modificar el carrito. ID: ${cid}`, error);
        }
    }

    //  Vaciar un carrito segun ID
    static async cleanCart(cid) {
        try {
            return await CartDAO.update({ _id: cid }, { $set: { products: [] } });
        } catch (error) {
            throw new Error(`Error al vaciar el carrito. ID: ${cid}`, error);
        }
    }

    // Elimina producto segun ID del carrito segun ID
    static async deleteProductOnCart(cid, pid) {
        try {
            return await CartDAO.update({ _id: cid }, { $pull: { products: { product: pid } } });
        } catch (error) {
            throw new Error(`Error al eliminar el producto ID: ${pid} del carrito ID: ${cid}`, error);
        }
    }

    //  Modifica un producto del carrito segun ID
    static async updateProductOnCart(cid, pid, newQuantity) {
        try {
            return await CartDAO.update({ _id: cid, 'products.product': pid }, { $set: { 'products.$.quantity': newQuantity } });
        } catch (error) {
            throw new Error(`Error al modificar el carrito. ID: ${cid}`, error);
        }
    }

}