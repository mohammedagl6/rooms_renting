
import RoomsContainer from '../components/RoomsContainer'
import { useContext, useEffect } from 'react';
import { getRooms } from '../actions/roomActions';
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