import Room from './Room'
import { useContext } from 'react'
import { context } from '../context/context'

const RoomsList = () => {
    const {state: { filteredRooms }} = useContext(context);
    if (!filteredRooms.length){
        return(
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
        <section className="roomsList">
            <div className="roomsList-center">
                {filteredRooms.map(room => <Room room={room} key={room._id} />)}
            </div>
        </section>
    )
}


export default RoomsList;