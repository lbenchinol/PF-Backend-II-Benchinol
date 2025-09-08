import TicketsDAO from '../dao/ticketsDAO.js';

export default class TicketsRepository {

    //  Crea un ticket
    static async createTicket(ticket) {
        try {
            return await TicketsDAO.create(ticket);
        } catch (error) {
            throw new Error(`Error al crear el ticket`, error);
        }
    }


    static async getTicketById(tid) {
        try {
            return await TicketsDAO.getBy({ _id: tid });
        } catch (error) {
            throw new Error(`Error al obtener el ticket`, error);
        }
    }
}