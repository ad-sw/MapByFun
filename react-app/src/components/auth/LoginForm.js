import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    (async() => {
      setIsLoaded(true);
    })();
  }, [dispatch]);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const validator = () => {
    let error = []

    if(password.length < 6) {
      error.push('. : Please enter a password longer than five characters.')
    }
    if(password.length > 256) {
      error.push('. : Please enter a password shorter than 255 characters.')
    }
    else if(email.length > 256) {
      error.push('. : Please enter an email shorter 255 characters.')
    }
    return error;
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

  const demoLogin = async() => {
    setEmail('demo@test.io');
    setPassword('password');
    await dispatch(login('demo@test.io', 'password'));
  }

  return (<div>{isLoaded && (
      <div className="login-page">
        <div className="login-container2">
        <a href={`/sign-up`} className="loginText">SIGN UP</a>
        <button onClick={demoLogin} className="demoBtn2">LOG IN WITH DEMO</button>
          <div className='or-container2'>
                <span className='divider'></span><span className='or-text'>OR</span><span className='divider'></span>
          </div>
          <form onSubmit={onLogin} className="login-form">
          <div className="errors">
            {errors.map((error, ind) => (
              <div key={ind}>{error.split(':')[1]}</div>
            ))}
          </div>
            <div>
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
      </div>)}
    </div>
  );
};

export default LoginForm;
