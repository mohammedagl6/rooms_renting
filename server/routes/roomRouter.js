import { Router } from "express";
import { getRooms, createRoom, getRoom } from '../controllers/roomControllers.js'
import auth from "../middleware/auth.js";

const roomRouter = Router();


roomRouter.get("/", getRooms);

roomRouter.get("/:id", getRoom);

roomRouter.post("/", auth, createRoom)

export default roomRouter;