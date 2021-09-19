import CancelIcon from '@material-ui/icons/Cancel';
import { useContext, useState } from 'react';
import { register } from '../actions/userActions';
import { context } from '../context/context';



const Register  = ({ setIsRegister }) => {
    const {dispatch} = useContext( context )
    const [userForm, setUserForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await register(userForm, dispatch)
        if(response?.success){
            alert("Account created successfully")
            setIsRegister(false)
        }else{
            alert(response?.err || response?.msg)
        }
    }

    return(
        <div className="modal-container">
            <div className="modal-background"></div>
            <div className="modal">
                <CancelIcon className="cancel-modal" onClick={() => setIsRegister(false)}/>
                <form onSubmit={handleSubmit}>
                    <div className="fields-container">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name: </label>
                            <input type="text" name="firstName" id="firstName" required className="form-control" value={userForm.firstName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name: </label>
                            <input type="text" name="lastName" id="lastName" required className="form-control" value={userForm.lastName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" required className="form-control"  value={userForm.email} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone: </label>
                            <input type="tel" name="phone" id="phone" className="form-control" value={userForm.phone} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" >Password: </label>
                            <input type="password" name="password" id="password" required className="form-control" value={userForm.password} onChange={handleChange}/> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" >Repeat the password: </label>
                            <input type="password" name="confirmPassword" id="confirmPassword" required className="form-control" value={userForm.confirmPassword} onChange={handleChange}/> 
                        </div>
                    </div>
                    <div className="btn-container">
                        <button type="submit" className="btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Register