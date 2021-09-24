
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useContext, useState } from 'react';
import { context } from '../context/context';
import { deleteRoom } from '../actions/roomActions';
import { showAlert } from '../actions/alertActions';

const UserRoom = ({room, setRoom}) => {
    const {state: {user}, dispatch} = useContext( context )
    const { _id : roomId, price, street, city, image } = room
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleDelete = async (roomId) => {
        const status = await deleteRoom(roomId, user, dispatch)
        if(status){
            showAlert('danger', 'The room was not deleted! something went Wrong', dispatch)
        }
    }

    const handleEdit = () => {
        setRoom({...room, house: room?.house || ""})
        setIsMenuOpen(false)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return(
        <article className="room">
            <div className="edit-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MoreVertIcon fontSize="large"/>
            </div>
            { isMenuOpen && 
            <div className="edit-menu">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => handleDelete(room._id)}>Delete</button>
            </div>
            }
            <div className="img-container">
                <img src={image} alt="room" />
                <div className="price-top" style = { !price > 0 ? {background: '#698f3f'} : {}} >
                    <h6>{ price > 0 ? `$${price}` : 'Free' }</h6>
                </div>
                <Link to={`/room/${roomId}`} className="btn-primary room-link">
                    Details
                </Link>
            </div>
            <p className="room-info">{street}, {city}</p>
        </article>
    )
}

export default UserRoom;