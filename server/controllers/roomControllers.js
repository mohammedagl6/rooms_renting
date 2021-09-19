import Room from '../models/Room.js'



export const createRoom = async (req, res) => {
    if(!req?.userId) return res.status(401).json({success:false, msg:"You are not authorized to do this action!"})
    const room = req.body;
    const newRoom = new Room({...room, createdAt: new Date().toISOString(), ownerId: req.userId});
    try {
        await newRoom.save();
        res.status(200).json({success:true, result:newRoom})
    } catch (error) {
        res.status(409).json({err: error.message})
    }
}

export const getRooms = async (req, res) => {
    
    const limit = 20;
    try {
        const rooms = await Room.find().sort({_id: -1}).limit(limit);
        res.status(200).json({success:true, result: rooms})
    } catch (error) {
        res.status(404).json({success: false, err:error.message})
    }
}

export const getRoom = async (req, res) => {
    const {id: roomId} = req.params
    try {
        const roomDetails = await Room.findById(roomId);
        res.status(200).json({ success:true, result: roomDetails })
    } catch (error) {

        console.log(error);
        res.status(404).json({ success: false, err: "Room not found" })
    }
}