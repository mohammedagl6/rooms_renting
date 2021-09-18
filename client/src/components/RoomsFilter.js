import { useContext, useEffect, useState } from 'react'
import { context } from '../context/context'
import City from './City'


const RoomsFilter = () => {
    const {state: {rooms}} = useContext( context )
    
    const {minPrice, maxPrice} = rooms.reduce((minMax, room) => {
        if(minMax.minPrice > room.price) minMax.minPrice = room.price
        if(minMax.maxPrice < room.price) minMax.maxPrice = room.price
        return {minPrice: minMax.minPrice, maxPrice: minMax.maxPrice}
    }, {minPrice: 0, maxPrice: 0})

    const [price, setPrice] = useState(maxPrice)

    useEffect(()=> {
        setPrice(maxPrice)
    }, [maxPrice])
   
    const handleChange = (e)=>{
        setPrice(e.target.value)
    }
    return (
        <section className="filter-container">
            <div className="section-title">
                <h4>Find Your Room</h4>
                <div />
            </div>
            <form className="filter-form">
                <City filter={true} />
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