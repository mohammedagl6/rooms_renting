import { useState , useRef, useContext} from "react";
import imgToBase64 from "../utils/imgToBase64";
import ImageIcon from '@material-ui/icons/Image';
import CancelIcon from '@material-ui/icons/Cancel';
import { createRoom } from "../actions/roomActions";
import { context } from "../context/context";
import City from "../components/City"

const AddRoom = () => {

    const {state: {user}, dispatch} = useContext(context);
    
    const [room, setRoom] = useState({
        price: 0,
        street: '',
        house: '',
        city: '',
        description: '',
        image:'',
    });
    

    const handleChange = async (e) => {
        if(e.target.name === 'image'){
            try {
                const image = await imgToBase64(e.target.files[0])
                setRoom({...room, image})
            } catch (error) {
                console.log(error)   
            }
        }else{
            setRoom({...room, [e.target.name]:e.target.value})
        }
    }

    const roomImg = useRef();
    const handleCancel = () => {
        setRoom({...room, image:''})
        roomImg.current.value = null
    
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const status = await createRoom(room, user, dispatch);
        if(status){
            setRoom({
                price: 0,
                street: '',
                house: '',
                city: '',
                description: '',
                image:'',
            });
            roomImg.current.value = null
            alert("The room added successfully")
        }else{
            alert('The room was not added. try again')
        }
        
    }

    return(
        <section className="form-container">
            <div className="section-title">
                <h4>Creating New Room</h4>
                <div />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="fields-container">
                    <div className="form-group">
                        <label htmlFor="price">Price per day (0 = free stay):</label>
                        <input type="number" value={room.price} onChange={handleChange} name="price" id="price" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="street">Street:</label>
                        <input type="text" value={room.street} onChange={handleChange} name="street" id="street" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="house">House No:</label>
                        <input type="number" value={room.house} onChange={handleChange} name="house" id="house" className="form-control" />
                    </div>
                    <City handleChange = { handleChange }/>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea value={room.description} onChange={handleChange} col="5" rows="7" name="description" id="description" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">upload image:
                            <input 
                                type="file" 
                                name="image" 
                                id="image" 
                                className="form-control" 
                                onChange={handleChange}
                                accept=".png,.jpeg,.jpg"
                                required
                                style={{display: "none"}}
                                ref={roomImg}
                            />
                        <ImageIcon className="upload-images" />
                        </label>
                        
                    {(room?.image) && (
                        <div className="selectedImg-container">
                            <img src={room.image} className="selectedImg" alt="room" />
                            <CancelIcon className="cancel-selectedImg" onClick={handleCancel} />
                        </div>
                    )}
                    </div>
                </div>
                <div className="btn-container">
                    <button type="submit" className="btn-primary">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default AddRoom;