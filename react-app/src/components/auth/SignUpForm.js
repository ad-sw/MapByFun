import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

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
    <form onSubmit={onSignUp}>
      <div className="errors">
        {errors.map((error, idx) => (
        <div key={idx}>{error.split(':')[1]}</div>
        ))}
      </div>
      <div>
        <label>First Name</label>
        <input
          type='text'
          name='first_name'
          onChange={updateFirstName}
          value={first_name}
          required={true}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type='text'
          name='last_name'
          onChange={updateLastName}
          value={last_name}
          required={true}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          required={true}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
