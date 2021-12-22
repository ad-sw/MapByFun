const GET_ALL_USERS = "friends/GET_USERS";
const GET_USER_FRIENDS = "friends/GET_FRIENDS";
const GET_ONE_FRIEND_ROUTES = 'friends/GET_FRIEND_ROUTES'
const ADD_ONE_FRIEND = 'friends/ADD_RIEND';
const REMOVE_ONE_FRIEND = 'friends/REMOVE_FRIEND';

const loadAllUsers = (users) => ({
    type: GET_ALL_USERS,
    payload: users,
  });

const loadAllFriends = (friends, userId) => ({
  type: GET_USER_FRIENDS,
  payload: friends,
  userId,
});

const loadOneFriendRoutes = (routes, userId) => ({
    type: GET_ONE_FRIEND_ROUTES,
    payload: routes,
    userId
})

const addOneFriend = (friend, userId) => ({
    type: ADD_ONE_FRIEND,
    payload: friend,
    userId
});

const removeOneFriend = (data, userId) => ({
    type: REMOVE_ONE_FRIEND,
    payload: data,
    userId
});

export const getAllUsers = () => async (dispatch) => {
    const response = await fetch(`api/users/`);
    if (response.ok) {
        const data = await response.json();
        dispatch(loadAllUsers(data));
        return null;
    } else if (response.status < 500){
        const data = await response.json()
        if (data.errors) {
        return data.errors
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const getAllFriends = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/friends`);
  if (response.ok) {
    const data = await response.json();
    console.log(data, 'this is the thunk data')
    dispatch(loadAllFriends(data));
    return null;
    } else if (response.status < 500){
        const data = await response.json()
        if (data.errors) {
        return data.errors
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const getFriendRoutes = (userId, friendId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/friends/${friendId}/routes`);
    if (response.ok) {
      const data = await response.json();
      console.log(data, 'thunk friend route data')
      dispatch(loadOneFriendRoutes(data));
      return null;
      } else if (response.status < 500){
          const data = await response.json()
          if (data.errors) {
          return data.errors
          }
      } else {
          return ['An error occurred. Please try again.']
      }
  }

export const addFriend = (payload, userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/friends/add`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addOneFriend(data));
    return null;
    } else if (response.status < 500){
        const data = await response.json()
        if (data.errors) {
        return data.errors
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const removeFriend = (userId, friendId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/friends/${friendId}/delete`, {
    method: "DELETE"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(removeOneFriend(data, userId));
    return null;
    } else if (response.status < 500){
        const data = await response.json()
        if (data.errors) {
        return data.errors
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export default function friendReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_ALL_USERS:
            newState = {};
            action.payload.forEach(user => {
                newState[user.id] = user;
              })
            return newState;
        case GET_USER_FRIENDS:
            newState = {};
            let test = Object.values(action.payload)
            test.forEach(friend => {
                newState[friend.id] = friend;
              })
            return newState;
        case GET_ONE_FRIEND_ROUTES:
            newState = {};
            action.payload.routes.forEach(route => {
                newState[route.id] = route;
              })
            return newState;
        case ADD_ONE_FRIEND:
            newState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;
        case REMOVE_ONE_FRIEND:
            newState = {...state};
            delete newState[action.payload];
            return newState;
        default:
        return state;
    }
}
