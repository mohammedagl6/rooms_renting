import { CREATE_ROOM, END_LOADING, GET_ROOMS, START_LOADING, FILTER_ROOMS, SET_USER, DELETE_ROOM, UPDATE_ROOM, BOOK_ROOM } from "../constants/constants.js";



const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_ROOM:
            return {...state, rooms:[action.payload, ...state.rooms]}
        
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

        case DELETE_ROOM:
            return{...state, rooms: state.rooms.filter(room => room._id !== action.payload)}

        case UPDATE_ROOM:
            return{...state, rooms: [action.payload, ...state.rooms.filter(room => room._id !== action.payload._id)]}
        
        case BOOK_ROOM:
            return{...state, rooms: [action.payload, ...state.rooms.filter(room => room._id !== action.payload._id)]}

        default:
            throw new Error('There is no action matches');
    }
}

export default reducer;