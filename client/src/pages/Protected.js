import { useContext } from "react"
import Error from "./Error"
import { context } from "../context/context"


const Protected = ({ children }) => {

    const {state: {user}} = useContext( context )
    
    if(user?.token) return children

    return <Error message="Register or login to access this page."/>
}

export default Protected