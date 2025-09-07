import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, index: true },
    products: {
        type: [
            {
                product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
                quantity: Number
            }
        ],
        default: []
    },
    amount: Number,
    created_at: { type: Date, default: Date.now() }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;