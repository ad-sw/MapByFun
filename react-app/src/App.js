import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import RouteCreateForm from './components/RouteCreateForm';
import RouteEditForm from './components/RouteEditPage'
import RoutesDashboard from './components/UserRoutesDashboard';
import RoutePage from './components/SoloRoutePage';
import HomePage from './components/Homepage';
import UserFriendsDashboard from './components/UserFriendsDashboard';
import UserNonfriendsDashboard from './components/UserNonfriendsDashboard';
import { authenticate } from './store/session';
import NavBar from '../src/components/NavigationBar';
import ShopUnderConstruction from './components/UnderConstruction';
import AboutUs from './components/AboutUs'


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path='/' exact={true} >
          <HomePage/>
        </Route>
        <Route path='/login' exact={true}>
        {loaded && (
          <LoginForm/>
          )}
        </Route>
        <Route path='/sign-up' exact={true}>
        {loaded && (
          <SignUpForm/>
          )}
        </Route>
        {/* <Route path='/users' exact={true} >
          <UsersList/>
        </Route> */}
        <Route path='/users/:userId' exact={true} >
          <User/>
        </Route>
        <Route path='/routes/new' exact={true}>
          <RouteCreateForm/>
        </Route>
        <Route path='/routes/:routeId' exact={true}>
          <RoutePage/>
        </Route>
        <Route path='/routes/:routeId/edit' exact={true}>
          <RouteEditForm/>
        </Route>
        {/* <Route path='/users/:userId/people' exact={true} >
          <UserNonfriendsDashboard/>
        </Route> */}
        {/* <Route path='/users/:userId/friends' exact={true}>
          <UserFriendsDashboard/>
        </Route> */}
        <Route path='/under-construction' exact={true}>
          <ShopUnderConstruction/>
        </Route>
        <Route path='/about-us' exact={true}>
          <ShopUnderConstruction/>
        </Route>
        <Route path='/about' exact={true}>
          <AboutUs/>
        </Route>
        <Route path='/ambassador-program' exact={true}>
          <ShopUnderConstruction/>
        </Route>
        <Route path='/faq' exact={true}>
          <ShopUnderConstruction/>
        </Route>
        <Route path='/users/:userId/routes' exact={true}>
          <RoutesDashboard/>
        </Route>
        <Route path='/users/:userId/explore' exact={true}>
          <RoutesDashboard/>
        </Route>
        <Route path='/users/:userId/explore/:term' exact={true}>
          <RoutesDashboard/>
        </Route>
        <Route path='/users/:userId/find' exact={true}>
          <UserFriendsDashboard/>
        </Route>
        <Route path='/users/:userId/find/:term' exact={true}>
          <UserFriendsDashboard/>
        </Route>
        <Route path='/users/:userId/discover' exact={true}>
          <UserNonfriendsDashboard/>
        </Route>
        <Route path='/users/:userId/discover/:term' exact={true}>
          <UserNonfriendsDashboard/>
        </Route>
        <Route path='/users/:userId/search' exact={true}>
          <UsersList/>
        </Route>
        <Route path='/users/:userId/search/:term' exact={true}>
          <UsersList/>
        </Route>
        <Route>
        {loaded && (
          <center>
            <h1 id="h1404">404:</h1>
            Page Not Found
            <div><img alt="test" height="580" width="375" src="https://i.pinimg.com/originals/ec/94/fa/ec94fa24a9d4dca2c0d627039763dbaa.png"></img></div>
          </center>
        )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
