const GET_ALL_USERS = "friends/GET_USERS";
const GET_ALL_NON_USER_USERS = "friends/GET_NON_USER_USERS";
const GET_ALL_SEARCH_USERS = 'routes/GET_SEARCHED_USERS'

const loadAllUsers = (users) => ({
    type: GET_ALL_USERS,
    payload: users,
  }
);

const loadAllNonUserUsers = (friends, id) => ({
    type: GET_ALL_NON_USER_USERS,
    payload: friends,
    id,
  });

const searchUsers = (friends, userId) => {
    return {
        type: GET_ALL_SEARCH_USERS,
        payload: friends,
        userId
    }
}

export const getAllUsers = () => async (dispatch) => {
    const response = await fetch(`api/users`);
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

export const getAllNonUserUsers = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/search`);
    if (response.ok) {
        const data = await response.json();
        dispatch(loadAllNonUserUsers(data));
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

export const searchAllUsers = (userId, searchTerm) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/search/${searchTerm}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(searchUsers(data));
    }
  };

export default function userReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_ALL_USERS:
            newState = {};
            Object.values(action.payload.users).forEach(user => {
                newState[user.id] = user;
              })
            return newState;
        case GET_ALL_NON_USER_USERS:
            newState = {};
            action.payload.users.forEach(user => {
                newState[user.id] = user;
                })
            return newState;
        case GET_ALL_SEARCH_USERS:
            newState = {...state}
            let searchedUsersArr = Object.values(...action.payload.users);
            let try1 = Object.values(searchedUsersArr)
            newState.searchedUsers = try1
            return newState
        default:
            return state;
    }
}
