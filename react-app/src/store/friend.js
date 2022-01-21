const GET_USER_FRIENDS = "friends/GET_FRIENDS";
const ADD_ONE_FRIEND = 'friends/ADD_FRIEND';
const REMOVE_ONE_FRIEND = 'friends/REMOVE_FRIEND';
const GET_ALL_SEARCH_FRIENDS = 'routes/GET_SEARCHED_FRIENDS'

const loadAllFriends = (friends, userId) => ({
  type: GET_USER_FRIENDS,
  payload: friends,
  userId,
});

const addOneFriend = (friend) => ({
    type: ADD_ONE_FRIEND,
    payload: friend,
});

const removeOneFriend = (data) => ({
    type: REMOVE_ONE_FRIEND,
    payload: data,
});

const searchFriends = (friends, userId) => {
    return {
      type: GET_ALL_SEARCH_FRIENDS,
      payload: friends,
      userId
    }
  }

export const getAllFriends = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/friends`);
  if (response.ok) {
    const data = await response.json();
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

export const addFriend = (payload) => async (dispatch) => {
  const response = await fetch(`/api/users/${payload?.user_id}/friends/${payload.friend_id}/add`, {
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
    dispatch(removeOneFriend(data));
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

export const searchAllFriends = (userId, searchTerm) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/search/${searchTerm}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(searchFriends(data));
    }
  };

export default function friendReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_USER_FRIENDS:
            newState = {};
            action.payload.users.forEach(friend => {
                newState[friend.id] = friend;
              })
            return newState;
        case ADD_ONE_FRIEND:
            newState = {...state};
            newState[action.payload.id] = action.payload;
            const copiedState = {...newState};
            return copiedState;
        case REMOVE_ONE_FRIEND:
            newState = {...state};
            delete newState[action.payload.friend_id];
            return newState;
        case GET_ALL_SEARCH_FRIENDS:
            newState = {...state}
            let searchedUsersArr = Object.values(...action.payload.users);
            newState.searchedFriends = searchedUsersArr
            return newState
        default:
        return state;
    }
}
