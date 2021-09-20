import { useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "../context/context"


const Protected = ({ children }) => {

    const {state: {user}} = useContext( context )
    
    if(user?.token) return children

    return(
        <div className="error">
            <h3>Register or login to access this page.</h3>
            <Link to="/" className="btn-primary">
                back to the main page
            </Link>
        </div>
    )
}

export default Protected