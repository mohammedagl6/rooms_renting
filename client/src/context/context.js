import { createContext, useReducer } from "react";
import reducer from "./reducer";


const initialState = {
    rooms: [],
    filteredRooms: [],
    user: {},
    isLoading: true,
}


export const context = createContext(initialState);

export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <context.Provider value = {{state, dispatch}} >
            {children}
        </context.Provider>
    )

}
