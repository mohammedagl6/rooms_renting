import { CREATE_ROOM, END_LOADING, GET_ROOMS, START_LOADING, FILTER_ROOMS, DELETE_ROOM, UPDATE_ROOM, BOOK_ROOM } from "../constants/constants"


const url = process.env.REACT_APP_API_URL + 'room';

export const createRoom = async (room, user, dispatch) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json', authorization: `Bearer ${user?.token}`},
            body: JSON.stringify(room)
        });
        const data = await response.json();
        if(data.success) dispatch({type: CREATE_ROOM, payload:data.result})
        return data.success;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const updateRoom = async (room, user, dispatch) => {
    
    try {
        const response = await fetch(url, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json', authorization: `Bearer ${user?.token}`},
            body: JSON.stringify(room)
        })
        const data = await response.json()
       if(data.success) dispatch({type: UPDATE_ROOM, payload: data.result})
       return data.success
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getRooms = async (dispatch) => {
    dispatch({type: START_LOADING})
    try {
        const response = await fetch(url);
        const data = await response.json();
        if(data.success){
            dispatch({type: GET_ROOMS, payload: data.result})
        }
    } catch (error) {
        console.log(error)
    }
    dispatch({type: END_LOADING})
}

export const getRoom = async (roomId, dispatch) => {
    dispatch({type: START_LOADING})
    try {
        const response = await fetch(`${url}/${roomId}`);
        const data = await response.json();
        dispatch({type: END_LOADING})
        if(data.success) return data.result
        return {} 
    } catch (error) {
        console.log(error)
        dispatch({type: END_LOADING})
        return {}
    }
}


export const getCities = async () => {
    try {
        const response = await fetch( process.env.REACT_APP_API_URL + 'city')
        const data = await response.json();
        if(data.success) return data.result
        return []
    } catch (error) {
        console.log(error)
        return []
    }
}

export const filterRooms = (rooms, city, price, dispatch) => {
    const filteredRooms = rooms.filter(room => {
        return (room.price <= price) && ( !city || room.city === city )
    })
    dispatch({ type: FILTER_ROOMS , payload: filteredRooms})
}

export const deleteRoom = async (roomId, user, dispatch) => {
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json', authorization: `Bearer ${user?.token}`},
            body: JSON.stringify({id: roomId})
        })
        const data = await response.json()
        if(data.success){
            dispatch({type: DELETE_ROOM, payload: roomId})
        }
        return data.success
    } catch (error) {
        console.log(error)
        return false
    }
}

export const bookRoom = async (id, user, dispatch) => {
    dispatch({type: START_LOADING})
    try {
        const response = await fetch(url+"/book", {
            method: "POST",
            headers: {'Content-Type': 'application/json', authorization: `Bearer ${user?.token}`},
            body: JSON.stringify({id})
        })
        const data = await response.json()
        if(data.success){
            dispatch({type:BOOK_ROOM, payload: data.result})
        }
        dispatch({type: END_LOADING})
        return data.success
    } catch (error) {
        console.log(error)
        dispatch({type: END_LOADING})
        return false
    }
}