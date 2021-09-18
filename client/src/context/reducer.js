import { CREATE_ROOM, END_LOADING, GET_ROOMS, START_LOADING } from "../constants/constants.js";



const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_ROOM:
            return {...state, rooms:[...state.rooms, action.payload]}
        
        case GET_ROOMS:
            return {...state, rooms: action.payload}    
        
        case START_LOADING:
            return {...state, isLoading: true}

        case END_LOADING:
            return {...state, isLoading: false}

        default:
            throw new Error('There is no action matches');
    }
}

export default reducer;