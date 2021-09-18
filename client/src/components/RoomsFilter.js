import { useContext, useEffect, useState } from 'react'
import { filterRooms } from '../actions/roomActions'
import { context } from '../context/context'
import City from './City'


const RoomsFilter = () => {
    const {state: {rooms}, dispatch} = useContext( context )
    
    const {minPrice, maxPrice} = rooms.reduce((minMax, room) => {
        if(minMax.minPrice > room.price) minMax.minPrice = room.price
        if(minMax.maxPrice < room.price) minMax.maxPrice = room.price
        return {minPrice: minMax.minPrice, maxPrice: minMax.maxPrice}
    }, {minPrice: 0, maxPrice: 0})

    const [price, setPrice] = useState(maxPrice)
    const [city, setCity] = useState('');

    useEffect(()=> {
        setPrice(maxPrice)
    }, [maxPrice])
   
    const handleChange = async (e)=>{

        if(e.target.name === 'price') {
            setPrice(e.target.value)
            filterRooms(rooms, city, e.target.value, dispatch)
        }
        if(e.target.name === 'city') {
            setCity(e.target.value)
            filterRooms(rooms, e.target.value, price, dispatch)
        }
            

        
        
    }
    return (
        <section className="filter-container">
            <div className="section-title">
                <h4>Find Your Room</h4>
                <div />
            </div>
            <form className="filter-form">
                <City filter={true} handleChange={ handleChange }/>
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input 
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        onChange={handleChange}
                        className="form-control"
                        value={price}
                    />
                </div>
            </form>
        </section>
    )
}

export default RoomsFilter;