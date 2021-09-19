import { useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "../context/context"


const Protected = ({ children }) => {

    const {state: {user}} = useContext( context )
    console.log(user)
    if(user?.token) return children

    return(
        <div className="error">
            <h3>You are not authorized to access this page!</h3>
            <Link to="/" className="btn-primary">
                back to the main page
            </Link>
        </div>
    )
}

export default Protected