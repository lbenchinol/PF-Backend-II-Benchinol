import Product from "../models/product.model.js";

export class ProductsDAO {

    //  Obtiene todos los productos segun filtros
    static async get(filterQuery, opts) {
        try {
            return await Product.paginate(filterQuery, opts);
        } catch (error) {
            throw new Error(`Error al obtener los productos.`, error);
        }
    }

    //  Obtiene un producto segun ID
    static async getBy(filter = {}) {
        try {
            return await Product.findOne(filter);
        } catch (error) {
            throw new Error(`Error al obtener el producto. ${filter ? filter : ''}`, error);
        }
    }

    //  Agrega un producto nuevo
    static async create(product) {
        try {
            const newProduct = new Product(product);
            await newProduct.save();
            return newProduct;
        } catch (error) {
            throw new Error(`Error al agregar el producto.`, error);
        }
    }

    //  Modifica un producto segun ID
    static async update(pid, product) {
        try {
            const opts = { new: true, runValidators: true };
            return await Product.findByIdAndUpdate(pid, product, opts);
        } catch (error) {
            throw new Error(`Error al modificar el producto. ID: ${pid}`, error);
        }
    }

    //  Elimina un producto segun ID
    static async delete(pid) {
        try {
            return await Product.findByIdAndDelete(pid);
        } catch (error) {
            throw new Error(`Error al eliminar el producto. ID: ${pid}`, error);
        }
    }

}