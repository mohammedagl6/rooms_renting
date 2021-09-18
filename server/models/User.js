import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: String,
    image: String
})


const User = mongoose.model('users', userSchema);

export default User;