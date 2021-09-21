import { useContext } from "react";
import { useParams, useHistory } from "react-router-dom"
import Loading from "../components/Loading";
import { context } from "../context/context";
import { bookRoom } from "../actions/roomActions"
import PayPal from "../components/PayPal";


const BookRoom = () => {
    const {id} = useParams();
    const history = useHistory()
    const {state: {rooms, user, isLoading}, dispatch} = useContext( context )
    if(isLoading) return <Loading />
    const room = rooms.find(room => room._id === id)
    const {image, street, city, price} = room
    
    const handleClick = async () => {
        const response = await bookRoom(id, user, dispatch)
        if (response){
            alert('Room booked successfully')
            history.push("/room/bookings")
        }else{
            alert('Room was not booked. Try again later')
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