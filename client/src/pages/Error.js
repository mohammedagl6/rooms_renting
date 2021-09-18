import {Link} from 'react-router-dom'

const Error = () => {

    return(
        <div className="error">
            <h3>Page not found!</h3>
            <Link to="/" className="btn-primary">
                back to the main page
            </Link>
        </div>
    )
}

export default Error;