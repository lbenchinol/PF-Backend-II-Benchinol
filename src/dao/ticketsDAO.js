import Ticket from "../models/ticket.model.js";

export default class TicketsDAO {

    //  Crea un ticket
    static async create(ticket) {
        try {
            const newTicket = new Ticket(ticket);
            newTicket.save();
            return newTicket;
        } catch (error) {
            throw new Error(`Error al crear el ticket`, error);
        }
    }

    //  Obtiene un ticket
    static async getBy(filter = {}) {
        try {
            return await Ticket.findOne(filter);
        } catch (error) {
            throw new Error(`Error al obtener el ticket`, error);
        }
    }

}