import { useContext , useState} from "react"
import RoomForm from "../components/RoomForm"
import { context } from "../context/context"
import UserRoom from "../components/UserRoom"
import Loading from "../components/Loading"



const MyRooms = () => {
    const {state: { rooms, user, isLoading }} = useContext( context )

    const [room, setRoom] = useState({
        price: 0,
        street: '',
        house: '',
        city: '',
        description: '',
        image:'',
        _id: null,
    });

    const userId = user?.result?.googleId || user?.result?._id
    const userRooms = rooms.filter(room => room.ownerId === userId)
    
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
            { isLoading ? <Loading /> :
                !userRooms.length ?
                <div className="empty-search">
                    <h3>No rooms added yet!</h3>
                </div>
                :
                <div className="roomsList-center">
                {userRooms.map(room => <UserRoom room={room} key={room._id} setRoom={setRoom}/>)}
                </div>  
            }
        </section>
        </>
    )
}

export default MyRooms