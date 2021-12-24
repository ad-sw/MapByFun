const GET_ALL_USERS = "friends/GET_USERS";
// const GET_USER_NONFRIENDS = "friends/GET_NONFRIEND_USERS";

const loadAllUsers = (users) => ({
    type: GET_ALL_USERS,
    payload: users,
  });

// const loadAllNonFriends = (friends, id) => ({
//     type: GET_USER_NONFRIENDS,
//     payload: friends,
//     id,
//   });

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

export const getAllNonFriends = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/people`);
    if (response.ok) {
        const data = await response.json();
        dispatch(loadAllUsers(data));
        console.log(data, 'this is data')
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

export default function userReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_ALL_USERS:
            newState = {};
            Object.values(action.payload.users).forEach(user => {
                newState[user.id] = user;
              })
            return newState;
        // case GET_USER_NONFRIENDS:
        //     newState = {};
        //     Object.values(action.payload.users).forEach(user => {
        //         newState[user.id] = user;
        //         })
        //     return newState;
        default:
            return state;
    }
}
