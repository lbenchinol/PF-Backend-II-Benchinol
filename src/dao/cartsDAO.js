import Cart from "../models/cart.model";

export class CartDAO {

    //  Obtiene un carrito segun Filtro
    static async getBy(filter = {}) {
        try {
            return await Cart.findOne(filter).populate('products.product');
        } catch (error) {
            throw new Error(`Error al obtener el carrito. ${filter ? filter : ''}`, error);
        }
    }

    //  Agrega un carrito nuevo
    static async create() {
        try {
            const cart = new Cart();
            await cart.save();
            return cart;
        } catch (error) {
            throw new Error(`Error al crear el carrito`, error);
        }
    }

    //  Modifica un carrito segun ID
    static async update(filter, update) {
        try {
            const opts = { new: true, runValidators: true };
            const newCart = await Cart.findOneAndUpdate(filter, update, opts).populate('products.product');
        } catch (error) {
            throw new Error(`Error al modificar el carrito. ID: ${cid}`, error);
        }
    }

}