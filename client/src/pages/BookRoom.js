import { useContext } from "react";
import { useParams, useHistory } from "react-router-dom"
import Loading from "../components/Loading";
import { context } from "../context/context";
import { bookRoom } from "../actions/roomActions"
import PayPal from "../components/PayPal";
import Alert from "../components/Alert";
import { showAlert } from "../actions/alertActions";


const BookRoom = () => {
    const {id} = useParams();
    const history = useHistory()
    const {state: {rooms, user, isLoading, alert}, dispatch} = useContext( context )
    if(isLoading) return <Loading />
    const room = rooms.find(room => room._id === id)
    const {image, street, city, price} = room
    
    const handleClick = async () => {
        const response = await bookRoom(id, user, dispatch)
        if (response){
            history.push("/room/bookings")
        }else{
            showAlert('danger', 'Room was not booked. Try again later', dispatch)
        }
    }
    return (
        <section className="form-container">
            <div className="section-title">
                <h4>Booking Info:</h4>
                <div />
            </div>
            <div className="fields-container checkout-card">
                <div className="form-group">
                    <img src={image} alt={city} width="200"/>
                </div>
                <div className="form-group">
                    <label>{street}, {city}</label>
                </div>
                <div className="form-group">
                    <label>{price ? `Price: $${price}` : "Free Staying"}</label>
                </div>
            </div>
            <div className="btn-container">
                {alert.isAlert && <Alert />}
                { price > 0 ?
                    <PayPal roomId={id}/>
                    :
                    <button className="btn-primary" onClick={handleClick}>Confirm Booking</button>
                }
            </div>
        </section>
    )
}

export default BookRoom