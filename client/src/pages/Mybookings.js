import { useContext } from "react"
import Loading from "../components/Loading"
import BookedRoom from "../components/BookedRoom"
import { context } from "../context/context"



const MyBookings = () => {
    const {state: {rooms, user, isLoading}} = useContext( context )
    if (isLoading) return <Loading />
    const userId = user?.result?._id || user?.result?.googleId
    const bookedRooms = rooms.filter(room => room?.bookedBy === userId)
    return (
        <div className="container">
            <section className="section-title">
                <h4>Your Booked Rooms</h4>
                <div />
            </section>
            { !bookedRooms.length ? 
            <div className="empty-search">
                <h3>No rooms added yet!</h3>
            </div>
            :
            <section className="roomsList">
                <div className="roomsList-center">
                    {bookedRooms.map(room => <BookedRoom room={room} key={room._id} />)}
                </div>
            </section>
            }   
        </div>
    )
}

export default MyBookings