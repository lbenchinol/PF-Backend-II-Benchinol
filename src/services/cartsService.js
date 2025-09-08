import TicketsRepository from "../repository/ticketsRepository.js";
import CartsRepository from "../repository/cartsRepository.js";
import UsersRepository from "../repository/usersRepository.js";
import ProductsRepository from "../repository/productsRepository.js";
import enviarMail from '../nodeMailer/mailSender.js';

export default class CartsService {

    //  Compra el carrito, crea un ticket y vacia el carrito del ID
    static async buyCart(cid) {
        try {
            let amount = 0;

            //  Chequea si hay productos en el carrito
            const cart = await CartsRepository.getCartById(cid);
            if (!cart) throw new Error(`Error al encontrar el carrito. ID: ${cid}`);

            //  Confirma existencia > cantidad en carrito. Suma los valores totales
            cart.products.map(p => {
                if (p.quantity > p.product.stock) {
                    throw new Error(`No hay stock suficiente del producto ${p.product.title}. Stock: ${p.product.stock}, Cantidad en el carrito: ${p.quantity}`);
                }
                amount += p.product.price * p.quantity;
            });

            //  Obtiene usuario asociado al carrito
            const user = await UsersRepository.findUserByCart(cid);

            //  Copia los productos y cantidades en una variable para guardarlos en el ticket
            const ticketCart = cart.products.map(p => ({ product: p.product._id, quantity: p.quantity }));

            //  Crear un ticket
            const info = { first_name: user.first_name, last_name: user.last_name, email: user.email, products: ticketCart, amount };
            const ticket = await TicketsRepository.createTicket(info);
            if (!ticket) throw new Error(`Error al crear el ticket.`);

            //  Resta stock de los productos segun la cantidad en carrito
            for (let p of cart.products) {
                const newStock = p.product.stock - p.quantity;
                await ProductsRepository.updateProductById(p.product._id, { stock: newStock });
            }

            //  Envia mail de confirmacion de ticket
            await enviarMail(user.email, user, ticket, cart);

            //  Vacia el carrito del usuario
            await CartsRepository.cleanCart(cid);

            return ticket;
        } catch (error) {
            throw new Error(`Error al comprar el carrito ID: ${cid}`, error);
        }
    }

}