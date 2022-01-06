import React, { useState, useEffect } from 'react';
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
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      setLoaded(true);
    })();
  }, [dispatch]);

  const validator = () => {
    let error = []
    if(first_name.length > 41) {
        error.push('. : Please enter a shorter first name than 40 characters.')
    } else if(first_name.length < 4) {
      error.push('. : Please enter a first name longer than 3 characters.')
    }
    if(last_name.length > 41) {
      error.push('. : Please enter a shorter last name than 40 characters.')
    } else if(last_name.length < 4) {
      error.push('. : Please enter a last name longer than 3 characters.')
    }
    if(password !== repeatPassword) {
      error.push('. : Please enter matching passwords.')
    }
    if(email.length > 256) {
        error.push('. : Please enter a shorter email than 255 characters.')
    }
    if(password.length > 256) {
      error.push('. : Please enter a shorter password than 255 characters.')
    } else if (password.length < 6) {
    error.push('. : Please enter a password longer than 5 characters.')
    }
    return error;
  }

  const demoLogin = async() => {
    await dispatch(login('demo@test.io', 'password'));
  }

  // const onSignUp = async (e) => {
  //   e.preventDefault();
  //   if (password === repeatPassword) {
  //     const data = await dispatch(signUp(first_name, last_name, email, password));
  //     if (data) {
  //       setErrors(data)
  //     }
  //   } else {
  //     setErrors([". : Passwords don't match."])
  //   }
  // };

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
    return <Redirect to={`/users/${user.id}/routes`}/>;
  }


  return (<div>{loaded && (
      <div className="signup-page">
        <div className="login-form-container">
        <a href={`/login`} className="loginText">LOG IN</a>
          <button onClick={demoLogin} className="demoBtn2">LOG IN WITH DEMO</button>
            <div className='or-container2'>
                  <span className='divider'></span><span className='or-text'>OR</span><span className='divider'></span>
            </div>
          <form onSubmit={onSignUp} className="login-form">
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
                value={first_name}
                onChange={updateFirstName}
                required
              />
            </div>
            <div>
              <input
                type='text'
                className="email-input"
                placeholder="last name"
                name='last_name'
                value={last_name}
                onChange={updateLastName}
                required
              />
            </div>
            <div>
              <input
                type='text'
                className="email-input"
                placeholder="email"
                name='email'
                value={email}
                onChange={updateEmail}
                required
              />
            </div>
            <div>
              <input
                type='password'
                className='password-input'
                placeholder="password"
                name='password'
                value={password}
                onChange={updatePassword}
                required
              />
            </div>
            <div>
              <input
                type='password'
                className='password-input'
                placeholder="repeat password"
                name='repeat_password'
                value={repeatPassword}
                onChange={updateRepeatPassword}
                required
              />
              <button type='submit' className="signup-button">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>)}
    </div>
    );
  }


export default SignUpForm;
