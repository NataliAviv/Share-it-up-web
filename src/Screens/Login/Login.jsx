import React, { useState, useEffect } from 'react';
import logo from '../../imgs/logo.png';
import './Login.css';
import user from '../../imgs/Icon_user.png';
import pass from '../../imgs/Icon_unlock.png';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { login } from '../../ServerApi';
import { setToken, getToken } from '../../Storage';
import { useHistory } from 'react-router-dom';
import { appAmount } from '../../OnAppMount';

const Login = () => {
  const history = useHistory();
  const EMAIL_INPUT = 1;
  const PASS_INPUT = 2;

  //states
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [error, setError] = useState({ userName: false, userPass: false });
  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    if (getToken()) {
      appAmount().then(() => {
        history.push('profile');
      });
    }
  }, [history]);

  return (
    <div className='form-login'>
      <img className='logo-img' src={logo} alt='Logo' />
      <div className='sign-in-title'>Sign In to Continue</div>
      <div className='login-container'>
        <form className='form-container' onSubmit={handleSubmit}>
          {renderInputs()}
          <div className='form-password-forget'>
            <a href='/'>Forgot Password?</a>
          </div>
          <input className='btn-login' type='submit' value='Login' />
        </form>

        <span className='login-label'> or sign in with</span>
        <div>
          <FaFacebook /> <FaGoogle /> <FaTwitter />
        </div>

        <div className='form-account'>
          Not Registered yet?<a href='/'>Sign Up</a>
        </div>
      </div>
    </div>
  );

  function renderInputs() {
    return (
      <div className='form-input'>
        <div className='email-input'>
          <img src={user} alt='User' />
          <input
            value={userName}
            placeholder='Enter your email...'
            onChange={event => handleChange(event, EMAIL_INPUT)}
          />
          <br />{' '}
          {error.userName && (
            <span className='error'>You must enter your email...</span>
          )}
        </div>
        <div className='pass-input'>
          <img src={pass} alt='Pass' />
          <input
            value={userPass}
            type='password'
            placeholder='Enter your password...'
            onChange={event => handleChange(event, PASS_INPUT)}
          />
          <br />
          {error.userPass && (
            <span className='error'>You must enter your password...</span>
          )}
        </div>
      </div>
    );
  }

  function handleChange(event, type) {
    const { value } = event.target;
    type === EMAIL_INPUT ? setUserName(value) : setUserPass(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const loginData = {
      user: {
        email: userName,
        password: userPass
      }
    };
    if (validation()) {
      const res = await login(loginData);
      if (res.token) {
        setToken(res.token);
      }
      await appAmount();
      history.push('profile');
    }
  }

  function validation() {
    let isValid = true;
    let email = false;
    let pass = false;

    if (userName === '') {
      email = true;
      isValid = false;
    }

    if (userPass === '') {
      pass = true;
      isValid = false;
    }
    setError({ userName: email, userPass: pass });

    return isValid;
  }
};
export default Login;
