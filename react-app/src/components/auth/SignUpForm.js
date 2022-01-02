import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp, login } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const validator = () => {
    let error = []
    if(first_name.length > 40) {
        error.push('. : Please enter a shorter user name than 40 characters.')
    } else if(first_name.length < 3) {
      error.push('. : Please enter a first name longer than 3 characters.')
    }
    if(last_name.length > 40) {
      error.push('. : Please enter a shorter user name than 40 characters.')
    } else if(last_name.length < 3) {
      error.push('. : Please enter a last name longer than 3 characters.')
    }
    if(password !== repeatPassword) {
      error.push('. : Please enter matching passwords.')
    }
    if(email.length > 255) {
        error.push('. : Please enter a shorter email than 255 characters.')
    }
    if(password.length > 255) {
      error.push('. : Please enter a shorter password than 255 characters.')
    } else if(password.length < 5) {
    error.push('. : Please enter a password longer than 5 characters.')
    }
    return error;
  }

  const demoLogin = async () => {
    const demoUser = {email: "demo@aa.io", password: "password"};
    await dispatch(login(demoUser));
  }

  const onSignUp = async (e) => {
    e.preventDefault();
    const errorsArr = validator()
    if(errorsArr.length) {
      setErrors(errorsArr)
    } else{
      const payload = {
          first_name,
          last_name,
          email,
          password
      }
    if (password === repeatPassword) {
      const data = await dispatch(signUp(payload));
      if(data) {
        setErrors(data)
      }
      console.log(data, 'test')
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/users/${user.id}/routes`} />;
  }

  return (
    <div className="signup-page">
      <div className="login-container">
        <form onSubmit={onSignUp} className="login-form">
        <a href={`/login`} className="signupText">LOG IN</a>
        <button onClick={demoLogin} className="demoBtn">LOG IN WITH DEMO</button>
          <div className='or-container'>
                <span className='divider'></span><span className='or-text'>OR</span><span className='divider'></span>
          </div>
          <div className="errors">
            {errors.map((error, idx) => (
            <div key={idx}>{error.split(':')[1]}</div>
            ))}
          </div>
          <div>
            <input
              type='text'
              className="email-input"
              placeholder="first name"
              name='first_name'
              onChange={updateFirstName}
              value={first_name}
              required={true}
            ></input>
          </div>
          <div>
            <input
              type='text'
              className="email-input"
              placeholder="last name"
              name='last_name'
              onChange={updateLastName}
              value={last_name}
              required={true}
            ></input>
          </div>
          <div>
            <input
              type='text'
              className="email-input"
              placeholder="email"
              name='email'
              onChange={updateEmail}
              value={email}
              required={true}
            ></input>
          </div>
          <div>
            <input
              type='password'
              className='password-input'
              placeholder="password"
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <input
              type='password'
              className='password-input'
              placeholder="repeat password"
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button type='submit' className="login-button">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
