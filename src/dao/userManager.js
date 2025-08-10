import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import CartManager from "./cartManager.js";

export default class UserManager {

    static async getUserById(uid) {
        try {
            const user = await User.findById(uid);
            if (!user) throw new Error(`Usuario no encontrado. ID: ${uid}`);
            return user;
        } catch (error) {
            throw new Error(`Error al obtener el usuario. ID: ${uid}`, error);
        }
    }

    static async getUserByEmail(email) {
        try {
            const user = await User.findOne({ email }).lean();
            if (!user) throw new Error(`Usuario no encontrado. Email: ${email}`);
            return user;
        } catch (error) {
            throw new Error(`Error al obtener el usuario. Email: ${email}`, error);
        }
    }

    static async addUser(user) {
        try {
            let { first_name, last_name, email, age, password, role = 'user' } = user;

            first_name !== "" ? first_name.trim() : first_name;
            last_name !== "" ? last_name.trim() : last_name;
            email !== "" ? email.trim() : email;
            password !== "" ? password.trim() : password;
            role !== "" ? role.trim() : role;

            if (!first_name || !last_name || !email || age < 1 || !age || !password || !role) {
                throw new Error(`Ingrese todos los datos correctamente.`);
            }

            password = this.encryptPassword(password);

            const newCart = await CartManager.addCart();
            const cart = newCart.id;

            let newUser = new User({ first_name, last_name, email, age, password, cart, role });
            await newUser.save();
            return newUser;
        } catch (error) {
            throw new Error(`Error al crear el usuario.`, error);
        }
    }

    static async updateUser(uid, updatedUser) {
        try {
            if (updatedUser.password) {
                updatedUser.password = this.encryptPassword(updatedUser.password);
            }
            let user = await User.findByIdAndUpdate(uid, updatedUser, { new: true, runValidators: true });
            if (!user) throw new Error(`Usuario no encontrado. ID: ${uid}`);
            delete user.password;
            return user;
        } catch (error) {
            throw new Error(`Error al obtener el usuario. ID: ${uid}`, error);
        }
    }

    static async deleteUser(uid) {
        try {
            const user = await User.findByIdAndDelete(uid);
            if (!user) throw new Error(`Usuario no encontrado. ID: ${uid}`);
            return;
        } catch (error) {
            throw new Error(`Error al obtener el usuario. ID: ${uid}`, error);
        }
    }

    static encryptPassword(password) {
        try {
            return bcrypt.hashSync(password, 10);
        } catch (error) {
            throw new Error(`Error al encriptar la contraseña`, error);
        }
    }

    static checkPassword(password, encryptedPassword) {
        try {
            if (!bcrypt.compareSync(password, encryptedPassword)) return false;
            return true;
        } catch (error) {
            throw new Error(`Error al chequear la contraseña.`);
        }
    }
}