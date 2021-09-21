import { Router } from "express";
import { getRooms, createRoom, getRoom, deleteRoom, updateRoom } from '../controllers/roomControllers.js'
import auth from "../middleware/auth.js";

const roomRouter = Router();


roomRouter.get("/", getRooms);

roomRouter.get("/:id", getRoom);

roomRouter.post("/", auth, createRoom)
roomRouter.patch("/", auth, updateRoom)

roomRouter.delete("/", auth, deleteRoom )

export default roomRouter;