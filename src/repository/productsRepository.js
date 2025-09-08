import ProductsDAO from "../dao/productsDAO.js";

export default class ProductsRepository {

    //  Obtiene todos los productos segun filtros
    static async getProducts(filterQuery, opts, lean) {
        try {
            return await ProductsDAO.get(filterQuery, { ...opts, lean });
        } catch (error) {
            throw new Error(`Error al obtener los productos.`, error);
        }
    }

    //  Obtiene un producto segun ID
    static async getProductById(pid) {
        try {
            return await ProductsDAO.getBy({ _id: pid });
        } catch (error) {
            throw new Error(`Error al obtener el producto. ID: ${pid}`, error);
        }
    }

    //  Agrega un producto nuevo
    static async createProduct(product) {
        try {
            return await ProductsDAO.create(product);
        } catch (error) {
            throw new Error(`Error al agregar el producto.`, error);
        }
    }

    //  Modifica un producto segun ID
    static async updateProductById(pid, product) {
        try {
            return await ProductsDAO.update(pid, product);
        } catch (error) {
            throw new Error(`Error al modificar el producto. ID: ${pid}`, error);
        }
    }

    //  Elimina un producto segun ID
    static async deleteProductById(pid) {
        try {
            return await ProductsDAO.delete(pid);
        } catch (error) {
            throw new Error(`Error al eliminar el producto. ID: ${pid}`, error);
        }
    }

}