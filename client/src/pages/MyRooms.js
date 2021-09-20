import { useContext , useState} from "react"
import RoomForm from "../components/RoomForm"
import { context } from "../context/context"
import UserRoom from "../components/UserRoom"



const MyRooms = () => {
    const {state: { rooms }} = useContext( context )
    const [room, setRoom] = useState({
        price: 0,
        street: '',
        house: '',
        city: '',
        description: '',
        image:'',
        _id: null,
    });

    return (
        <>
        <section className="form-container">
            <div className="section-title">
                <h4>{room?._id ? "Edit" : "Add Room"}</h4>
                <div />
            </div>
            <RoomForm room={room} setRoom={setRoom} />
        </section>
        <section className="roomsList" style={{paddingTop:"0"}}>
            <div className="userRooms-title">
                <h3>Added Rooms: </h3>
            </div>
            {!rooms.length ?
            <div className="empty-search">
                <h3>No rooms added yet!</h3>
            </div>
            :
            <div className="roomsList-center">
            {rooms.map(room => <UserRoom room={room} key={room._id} setRoom={setRoom}/>)}
            </div>  
            }
        </section>
        </>
    )
}

export default MyRooms