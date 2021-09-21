
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react';


const BookedRoom = ({room}) => {
   
    const { _id : roomId, price, street, city, image } = room

    const [isMenuOpen, setIsMenuOpen] = useState(false)

   

    

    return(
        <article className="room">
            <div className="edit-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MoreVertIcon fontSize="large"/>
            </div>
            { isMenuOpen && 
            <div className="edit-menu">
                <button>Cancel Booking</button>
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

export default BookedRoom;