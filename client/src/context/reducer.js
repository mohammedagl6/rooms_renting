import { CREATE_ROOM, END_LOADING, GET_ROOMS, START_LOADING, FILTER_ROOMS, SET_USER } from "../constants/constants.js";



const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_ROOM:
            return {...state, rooms:[...state.rooms, action.payload]}
        
        case GET_ROOMS:
            return {...state, rooms: action.payload, filteredRooms: action.payload }    
        
        case START_LOADING:
            return {...state, isLoading: true}

        case END_LOADING:
            return {...state, isLoading: false}

        case FILTER_ROOMS:
            return {...state, filteredRooms: action.payload}

        case SET_USER:
            return {...state, user: action.payload}

        default:
            throw new Error('There is no action matches');
    }
}

export default reducer;