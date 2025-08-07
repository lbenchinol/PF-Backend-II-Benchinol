import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, unique: true },
    age: { type: Number },
    password: { type: String },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
    role: { type: String, default: 'user' },
    created_at: { type: Date, default: Date.now() }
});

const User = mongoose.model('User', userSchema);

export default User;