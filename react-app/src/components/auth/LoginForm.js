import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const errorsArr = validator()
    if(errorsArr.length) {
      setErrors(errorsArr)
    } else{
      const payload = {
          email,
          password
      }
    if (email, password) {
      const data = await dispatch(login(payload));
        if(data) {
          setErrors(data)
        }
      }
    }
  };

  const validator = () => {
    let error = []

    if(password.length < 5) {
      error.push('. : Please enter a password longer than or equal to 5 characters.')
    }
    if(password.length > 255) {
      error.push('. : Please enter a shorter password than or equal to 255 characters.')
    }
    else if(email.length > 255) {
      error.push('. : Please enter a shorter email than or equal to 255 characters.')
    }
    return error;
  }

  const demoLogin = async () => {
    const demoUser = {email: "demo@aa.io", password: "password"};
    await dispatch(login(demoUser));
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/users/${user.id}/routes`}/>;
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={onLogin} className="login-form">
        <a href={`/sign-up`} className="signupText">SIGN UP</a>
        <button onClick={demoLogin} className="demoBtn">LOG IN WITH DEMO</button>
        <div className='or-container'>
              <span className='divider'></span><span className='or-text'>OR</span><span className='divider'></span>
        </div>
        <div className="errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error.split(':')[1]}</div>
          ))}
        </div>
          <div>
            {/* <label htmlFor='email'>Email</label> */}
            <input
              className="email-input"
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
              required
            />
          </div>
          <div>
            {/* <label htmlFor='password'>Password</label> */}
            <input
              className='password-input'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
              required
            />
            <button type='submit' className="login-button">LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
