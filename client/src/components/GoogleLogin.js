import { GoogleLogin } from 'react-google-login';
import { setUser } from '../actions/userActions';
import { useValue } from '../context/context';
import googleIcon from '../images/googleIcon.svg';

const GoogleAuth = ({ setIsActive }) => {
  const { dispatch } = useValue();

  const googleSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    setUser({ result, token }, dispatch);
    localStorage.setItem('profile', JSON.stringify({ result, token }));
    setIsActive(false);
  };
  const googleFailure = (err) => {
    alert('Login with google Failed');
    console.log(err);
  };

  return (
    <div className='google-container'>
      <img src={googleIcon} height='20' alt='google' />
      <GoogleLogin
        clientId='120153262696-f2tj5omkam4o66i1ksbnr8fpc8jdqqtr.apps.googleusercontent.com'
        render={(renderProps) => (
          <button
            className='btn-google'
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Login with Google
          </button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy='single_host_origin'
      />
    </div>
  );
};

export default GoogleAuth;
