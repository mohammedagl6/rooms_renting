import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from '../components/Loading';
import { useContext } from 'react';
import { context } from '../context/context';

const RoomsContainer = ()=> {
    const {state} = useContext( context )
   return (
    <>
        <RoomsFilter />
        {state.isLoading ? <Loading /> : <RoomsList />}
        
    </>
   ) 
}

export default RoomsContainer