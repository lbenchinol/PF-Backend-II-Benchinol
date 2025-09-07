import UsersRepository from "../repository/usersRepository.js";
import CartsRepository from '../repository/cartsRepository.js';
import bcrypt from 'bcrypt';

export default class UsersService {

    // Crea un carrito para el usuario
    static async createCart() {
        try {
            return await CartsRepository.createCart();
        } catch (error) {
            throw new Error(`Error al crear el carrito del usuario.`, error);
        }
    }

    //  Devuelve contraseña encriptada
    static encryptPassword(password) {
        try {
            return bcrypt.hashSync(password, 10);
        } catch (error) {
            throw new Error(`Error al encriptar la contraseña`, error);
        }
    }

    //  Compara contraseña encriptada con desencriptada
    static async checkPassword(password, uid) {
        try {
            const encryptedPassword = await UsersRepository.getPasswordById(uid);
            if (!bcrypt.compareSync(password, encryptedPassword)) return false;
            return true;
        } catch (error) {
            throw new Error(`Error al chequear la contraseña.`);
        }
    }

}