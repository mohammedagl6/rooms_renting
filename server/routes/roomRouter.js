import { Router } from "express";
import { getRooms, createRoom, getRoom } from '../controllers/roomControllers.js'

const roomRouter = Router();


roomRouter.get("/", getRooms);

roomRouter.get("/:id", getRoom);

roomRouter.post("/", createRoom)

export default roomRouter;