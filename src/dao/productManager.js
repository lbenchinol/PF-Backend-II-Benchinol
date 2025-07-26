import Product from "../models/product.model.js";
import config from "../config/config.js";

class ProductManager {

    //  Obtiene todos los productos segun filtros
    async getProducts(filters, lean = false) {
        try {
            const { limit = 10, page = 1, category, stock, sort } = filters;
            const filterQuery = {};
            const options = {};

            if (parseInt(limit) < 1) {
                throw new Error('Error, ingrese los valores de "limit" correctamente.');
            } else {
                options.limit = limit;
            }
            if (parseInt(page) < 1) {
                throw new Error('Error, ingrese los valores de "page" correctamente.');
            } else {
                options.page = page;
            }
            if (category) {
                filterQuery.category = category.toLowerCase();
            }
            if (stock) {
                if (parseInt(stock) < 1) {
                    throw new Error('Error, ingrese los valores de "stock" correctamente.');
                } else {
                    filterQuery.stock = { $gte: stock };
                }
            }
            if (sort) {
                if (sort.toLowerCase() !== 'asc' && sort.toLowerCase() !== 'desc') {
                    throw new Error('Error, ingrese los valores de "sort" correctamente.');
                } else {
                    options.sort = { price: sort.toLowerCase() };
                }
            }

            const data = lean ? await Product.paginate(filterQuery, { ...options, lean: true }) : await Product.paginate(filterQuery, options);

            const PORT = config.port;

            const payload = data.docs;
            delete data.docs;
            const links = {
                prevLink: data.prevPage ? `http://localhost:${PORT}/products?limit=${data.limit}&page=${data.prevPage}${data.category ? `&category=${data.category}` : ''}${data.stock ? `&stock=${data.stock}` : ''}` : null,
                nextLink: data.nextPage ? `http://localhost:${PORT}/products?limit=${data.limit}&page=${data.nextPage}${data.category ? `&category=${data.category}` : ''}${data.stock ? `&stock=${data.stock}` : ''}` : null,
            };
            const response = { status: 'success', payload, ...data, ...links };
            return response;
        } catch (error) {
            throw new Error(`Error al obtener los productos.`, error);
        }
    }

    //  Obtiene un producto segun ID
    async getProductById(pid) {
        try {
            const product = await Product.findById(pid);
            if (!product) throw new Error(`Producto no encontrado. ID: ${pid}`);
            return product;
        } catch (error) {
            throw new Error(`Error al obtener el producto. ID: ${pid}`, error);
        }
    }

    //  Agrega un producto nuevo
    async addProduct(product) {
        try {
            let { title, description, code, price, status, stock, category, thumbnail } = product;

            title !== "" ? title.trim() : title;
            description !== "" ? description.trim() : description;
            code !== "" ? code.trim() : code;
            status = true;
            category !== "" ? category.trim() : category;
            thumbnail !== "" ? thumbnail.trim() : thumbnail;

            if (title == "" || description == "" || code == "" || price < 0 || stock < 0 || category == "") {
                throw new Error(`Ingrese los valores correctamente.`, error);
            }

            const newProduct = new Product({ title, description, code, price, status, stock, category, thumbnail });
            await newProduct.save();
            return newProduct;
        } catch (error) {
            throw new Error(`Error al agregar el producto.`, error);
        }
    }

    //  Modifica un producto segun ID
    async updateProductById(pid, updatedProduct) {
        try {
            const product = await Product.findByIdAndUpdate(pid, updatedProduct, { new: true, runValidators: true });
            if (!product) throw new Error(`Producto no encontrado. ID: ${pid}`);
            return product;
        } catch (error) {
            throw new Error(`Error al modificar el producto. ID: ${pid}`, error);
        }
    }

    //  Elimina un producto segun ID
    async deleteProductById(pid) {
        try {
            const deletedProduct = await Product.findByIdAndDelete(pid);
            if (!deletedProduct) throw new Error(`Producto no encontrado. ID: ${pid}`);
            return;
        } catch (error) {
            throw new Error(`Error al eliminar el producto. ID: ${pid}`, error);
        }
    }
}

export default ProductManager;