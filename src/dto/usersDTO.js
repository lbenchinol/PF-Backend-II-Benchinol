import UsersDAO from "../dao/usersDAO.js";

export default class UsersDTO {

    // Obtiene usuario por Email
    static async getUserByEmail(email) {
        try {
            const user = await UsersDAO.getBy({ email });
            user.first_name = user.first_name.toUpperCase();
            user.last_name = user.last_name.toUpperCase();
            delete user.age;
            delete user.created_at;
            delete user.password;
            return user;
        } catch (error) {
            throw new Error(`Error al obtener el usuario. Email: ${email}`, error);
        }
    }
}