import Room from './Room'
import { useContext } from 'react'
import { context } from '../context/context'

const RoomsList = () => {
    const {state} = useContext(context);
    const {rooms} = state;
    if (!rooms.length){
        return(
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
        <section className="roomsList">
            <div className="roomsList-center">
                {rooms.map(room => <Room room={room} key={room._id} />)}
            </div>
        </section>
    )
}


export default RoomsList;