import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import * as sessionActions from "../../store/session";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoaded, setIsLoaded] = useState(false)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoaded(true);
    return dispatch(sessionActions.login({ email, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoLogin = async () => {
    const demoUser = {email: "demo@aa.io", password: "password"};
    await dispatch(login(demoUser));
    await setIsLoaded(true);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
    setIsLoaded(true);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
    setIsLoaded(true);
  };

  if (user) {
    return <Redirect to={`/users/${user.id}/routes`}/>;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
          required={true}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          required={true}
        />
        <button type='submit'>Login</button>
        <button onClick={demoLogin} className="demoBtn">Demo Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
