import User from "../models/user.model";

export class UsersDAO {

    // Obtiene usuario por Filter
    static async getBy(filter = {}) {
        try {
            return await User.findOne(filter);
        } catch (error) {
            throw new Error(`Error al obtener el usuario. ${filter}`, error);
        }
    }

    //  Crea un usuario
    static async create(user) {
        try {
            const newUser = new User(user);
            await newUser.save();
            return newUser;
        } catch (error) {
            throw new Error(`Error al crear el usuario.`, error);
        }
    }

    // Modifica usuario por ID
    static async update(uid, user) {
        try {
            const opts = { new: true, runValidators: true };
            return await User.findByIdAndUpdate(uid, user, opts);
        } catch (error) {
            throw new Error(`Error al modificar el usuario.`, error);
        }
    }

    //  Elimina usuario por ID
    static async delete(uid) {
        try {
            return await User.findByIdAndDelete(uid);
        } catch (error) {
            throw new Error(`Error al eliminar el usuario. ID: ${uid}`, error);
        }
    }








}