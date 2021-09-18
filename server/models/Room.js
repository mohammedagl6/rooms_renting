import mongoose from 'mongoose'

const roomSchema = mongoose.Schema({
    price: {type: Number, default: 0},
    street: {type: String, required: true},
    house: {type: Number},
    city: {type: String, required: true},
    image: {type: String, required: true},
    description: String,
    createdAt: {type: Date, default: new Date()}
})


const Room = mongoose.model('rooms', roomSchema)

export default Room;