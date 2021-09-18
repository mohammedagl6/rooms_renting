import { Link } from 'react-router-dom'
import logo from "../images/logo.svg"

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="You're Welcome" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;