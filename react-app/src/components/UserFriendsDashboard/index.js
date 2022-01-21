import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FriendBtns from '../AddDeleteFriendBtns';
import {getAllFriends} from  '../../store/friend'
import '../../../src/index.css'
import FriendSearchForm from '../FriendSearchbar';

function UserFriendsDashboard() {
  const history = useHistory();
  const {pathname} = history.location
  const routeId = pathname.split('/')[1]
  const dispatch = useDispatch()
  // const user_id = useSelector(state => state.session.user.id);
  const [isLoaded, setIsLoaded] = useState(false)
  const {userId} = useParams()

  useEffect(() => {
      (async () => {
          await dispatch(getAllFriends(userId));
          setIsLoaded(true)
      })();
  }, [dispatch, userId]);

  const friendsGot = useSelector(state => Object.values(state.friends.searchedFriends || state.friends))

  const userComponents = friendsGot?.map(friend => {

    return (<> {isLoaded && (
      <div className="friendCard">
        <div className="soMany">
          <NavLink className="soMany" key={friend?.id} to={`/users/${friend?.id}`}>
            <div className="friendContent"></div>
            <div className="fullName">{friend?.first_name}&nbsp;{friend?.last_name}</div>
          </NavLink>
            <div className="friendBtn"><FriendBtns friend_id={Number(friend?.id)} user_id={userId}/></div>
        </div>
      </div>
      )}
    </>)
  })

  if (!isLoaded) {
    return (
      <div id="loadingGif">
            <img src={"https://cdn.dribbble.com/users/1976516/screenshots/6860281/dribb.gif"} height="400px" width="600px" alt="loading"/>
            <div className="loadText">Loading</div>
        </div>
    );
  }

  return (<>{isLoaded && (
          <div className="topoBackground">
            <div className="friendLinks">
              <NavLink exact to={`/users/${userId}/search`} activeClassName="link-active" className="links">My Friends</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink exact to={`/users/${userId}/find`} activeClassName="link-active" className="links">Find Friends</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink exact to={`/users/${userId}/discover`} activeClassName="link-active" className="links">All Users</NavLink>
            </div>

            <div className="titleTry2">
            <hr className="testAlign2"></hr>
            {/* <h3 id="testAlign3">Search Friends by First or Last Name:</h3> */}
                <FriendSearchForm />
            <hr className="testAlign2"></hr>
            </div>

            <div className="titleTry">
              <h3 className="testAlign">Friends</h3>
            </div>

            <div className="friendDashboardContainer">{userComponents}</div>
          </div>
            )}
          </>
  );
}

export default UserFriendsDashboard;
