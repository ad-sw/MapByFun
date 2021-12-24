const GET_ALL_NON_FRIENDS = "nonfriends/GET_NONFRIENDS";
const GET_USER_FRIENDS = "friends/GET_FRIENDS";
const ADD_ONE_FRIEND = 'friends/ADD_RIEND';
const REMOVE_ONE_FRIEND = 'friends/REMOVE_FRIEND';

const loadAllNonFriends = (friends, id) => ({
    type: GET_ALL_NON_FRIENDS,
    payload: friends,
    id,
  });

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

export const getAllNonFriends = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/people`);
    if (response.ok) {
        const data = await response.json();
        dispatch(loadAllNonFriends(data));
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

export const addFriend = (payload, userId, friendId) => async (dispatch) => {
  const response = await fetch(`/api/users/${+userId}/friends/${friendId}/add`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload)
  });
  console.log(payload, userId, friendId, 'received payload from add')
  if (response.ok) {
    const data = await response.json();
    dispatch(addOneFriend(data));
    console.log(data, 'add data')
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

export default function friendReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_USER_FRIENDS:
            newState = {};
            action.payload.users.forEach(friend => {
                newState[friend.id] = friend;
              })
            return newState;
        case GET_ALL_NON_FRIENDS:
            newState = {};
            Object.values(action.payload.nonfriends).forEach(user => {
                newState[user.id] = user;
                })
            return newState;
        case ADD_ONE_FRIEND:
            newState = {...state};
            console.log(newState, 'current state')
            console.log(action.payload, 'payload add')
            newState[action.payload] = action.payload;
            console.log(newState, 'is this the new state')
            return newState;
        case REMOVE_ONE_FRIEND:
            newState = {...state};
            console.log(newState, 'current delete state')
            delete newState[action.payload.friend_id];
            return newState;
        default:
        return state;
    }
}
