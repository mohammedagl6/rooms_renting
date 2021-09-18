import { useContext, useEffect } from 'react';
import { getRooms } from '../actions/roomActions';
import RoomsContainer from '../components/RoomsContainer'
import { context } from '../context/context';


const Home = () => {

    const {dispatch} = useContext(context)
    useEffect(() => {
        getRooms(dispatch)
    }, [dispatch])

    return(

        <RoomsContainer />
        
    )
}

export default Home;