import UsersDAO from "../dao/usersDAO.js";

export default class UsersRepository {

    // Obtiene usuario por ID
    static async getUserById(uid) {
        try {
            const user = await UsersDAO.getBy({ _id: uid });
            delete user.password;
            return user;
        } catch (error) {
            throw new Error(`Error al obtener el usuario. ID: ${uid}`, error);
        }
    }

    // Obtiene usuario por Email
    static async getUserByEmail(email) {
        try {
            const user = await UsersDAO.getBy({ email });
            delete user.password;
            return user;
        } catch (error) {
            throw new Error(`Error al obtener el usuario. Email: ${email}`, error);
        }
    }

    // Crea un usuario
    static async createUser(user) {
        try {
            return await UsersDAO.create(user);
        } catch (error) {
            throw new Error(`Error al crear el usuario.`, error);
        }
    }

    //  Modifica usuario por ID
    static async updateUser(uid, user) {
        try {
            const newUser = await UsersDAO.update(uid, user);
            delete newUser.password;
            return newUser;
        } catch (error) {
            throw new Error(`Error al obtener el usuario. ID: ${uid}`, error);
        }
    }

    //  Elimina usuario por ID
    static async deleteUser(uid) {
        try {
            const user = await UsersDAO.delete(uid);
            delete user.password;
            return user;
        } catch (error) {
            throw new Error(`Error al eliminar el usuario. ID: ${uid}`, error);
        }
    }

    // Obtiene solamente contraseña de usuario por ID
    static async getPasswordById(uid) {
        try {
            const user = await UsersDAO.getBy({ _id: uid });
            return user.password;
        } catch (error) {
            throw new Error(`Error al obtener la contraseña del usuario. ID: ${uid}`, error);
        }
    }

}