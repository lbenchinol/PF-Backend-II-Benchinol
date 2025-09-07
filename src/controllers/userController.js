import UsersRepository from "../repository/usersRepository.js";
import UsersService from "../services/usersService.js";

export default class UserController {

    // Obtiene usuario por ID
    static async obtenerUsuarioPorId(uid) {
        try {
            const user = await UsersRepository.getUserById(uid);
            if (!user) throw new Error(`Usuario no encontrado. ID: ${uid}`);
            return user;
        } catch (error) {
            throw new Error(`Error al obtener el usuario. ID: ${uid}`, error);
        }
    }

    // Obtiene usuario por Email
    static async obtenerUsuarioPorEmail(email) {
        try {
            const user = await UsersRepository.getUserByEmail(email);
            if (!user) throw new Error(`Usuario no encontrado. Email: ${email}`);
            return user;
        } catch (error) {
            throw new Error(`Error al obtener el usuario. Email: ${email}`, error);
        }
    }

    // Crea un usuario
    static async crearUsuario(user) {
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

            password = UsersService.encryptPassword(password);

            const newCart = await UsersService.createCart();
            const cart = newCart.id;

            return await UsersRepository.createUser({ first_name, last_name, email, age, password, cart, role });
        } catch (error) {
            throw new Error(`Error al crear el usuario.`, error);
        }
    }

    //  Modifica usuario por ID
    static async modificarUsuario(uid, updatedUser) {
        try {
            if (updatedUser.password) {
                updatedUser.password = UsersService.encryptPassword(updatedUser.password);
            }
            const user = await UsersRepository.updateUser(uid, updatedUser);
            if (!user) throw new Error(`Usuario no encontrado. ID: ${uid}`);
            return user;
        } catch (error) {
            throw new Error(`Error al obtener el usuario. ID: ${uid}`, error);
        }
    }

    //  Elimina usuario por ID
    static async eliminarUsuario(uid) {
        try {
            const user = await UsersRepository.deleteUser(uid);
            if (!user) throw new Error(`Usuario no encontrado. ID: ${uid}`);
            return;
        } catch (error) {
            throw new Error(`Error al eliminar el usuario. ID: ${uid}`, error);
        }
    }

    //  Compara contraseña enviada con contraseña escriptada del ID
    static async confirmarContraseña(password, uid) {
        try {
            const checkedPassword = await UsersService.checkPassword(password, uid);
            if (!checkedPassword) return false;
            return true;
        } catch (error) {
            throw new Error(`Error al chequear la contraseña.`);
        }
    }

}