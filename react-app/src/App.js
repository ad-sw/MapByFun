import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import RouteForm from './components/RouteCreateForm';
import DashboardPage from './components/DashboardPage';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/routes/new' exact={true}>
          <RouteForm/>
        </ProtectedRoute>
        <ProtectedRoute path='/routes' exact={true}>
          <DashboardPage />
        </ProtectedRoute>
        <Route>
        <center>
            <h1 id="h1404">404:</h1>
            <p>Page Not Found</p>
            <img alt="test" height="650" width="400" src="https://i.pinimg.com/originals/1d/c7/f9/1dc7f97fd25ba503520fc6ed4022f75e.jpg"></img>
            {/* <img alt="test" height="650" width="400" src="https://i.pinimg.com/originals/ec/94/fa/ec94fa24a9d4dca2c0d627039763dbaa.png"></img> */}
        </center>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
