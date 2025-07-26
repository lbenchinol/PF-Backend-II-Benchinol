import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    products: {
        type: [
            {
                product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
                quantity: Number
            }
        ],
        default: []
    },
    created_at: { type: Date, default: Date.now() }
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;