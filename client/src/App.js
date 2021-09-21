import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route }  from "react-router-dom"
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import Error from './pages/Error'
import MyRooms from './pages/MyRooms'
import Protected from './pages/Protected';
import { useContext, useEffect } from 'react';
import { getRooms } from './actions/roomActions';
import { context } from './context/context';


const  App = () => {

  const {dispatch} = useContext(context)
    useEffect(() => {
        getRooms(dispatch)
        console.log("dispatch changed")
    }, [dispatch])

  return (
    <>
     <Router>
       <Navbar />
       <Switch>
         <Route exact path="/" >
           <Home />
         </Route>
         <Route exact path="/room/create">
           <Protected>
             <MyRooms />
           </Protected>
         </Route>
         <Route exact path="/room/book">
           <Protected>
             <MyRooms />
           </Protected>
         </Route>
         <Route exact path="/room/:id" >
           <RoomDetails />
         </Route>
         <Route>
           <Error />
         </Route>
       </Switch>
     </Router>
    </>
  );
}

export default App;
