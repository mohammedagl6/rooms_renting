import {Link} from 'react-router-dom' 
import { useParams } from 'react-router-dom';
import { getRoom } from '../actions/roomActions';
import { useState, useEffect, useContext } from 'react';
import { context } from '../context/context';
import Loading from '../components/Loading';



const RoomDetails = () => {

    const {id: roomId} = useParams();
    const [room, setRoom] = useState({})
    const {dispatch, state} = useContext( context )

    useEffect( () => {

        const fetchRoom = async () => {
            const roomDetails = await getRoom(roomId,dispatch )
            setRoom(roomDetails)
        }
        fetchRoom()
    }, [roomId, dispatch])
    
    if(state.isLoading) return <Loading />

    const {price, street, house, city, image, description} = room;
   
    if(!city){
        return(
            <div className="error">
                <h3>No such room could be found..</h3>
                <Link to="/" className="btn-primary">
                    back to the main page
                </Link>
            </div>
        )
    }
    return(
        <>
            <section className="single-room">
                <div className="single-room-images">
                    <img src={image} alt={`${street}, ${city}`} />
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{ description }</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>Price: {price}</h6>
                        <h6>Address: {street} {house}, {city}</h6>
                    </article>
                </div>
            </section>
            {/* <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    <li>- Comfortable beds</li>
                    <li>- Comfortable beds</li>
                    <li>- Comfortable beds</li>
                    <li>- Comfortable beds</li>
                </ul>
            </section> */}
        </>
    )

}


export default RoomDetails