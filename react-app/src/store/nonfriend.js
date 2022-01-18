const GET_ALL_NON_FRIENDS = "nonfriends/GET_NONFRIENDS";
const REMOVE_A_NON_FRIEND = "nonfriends/REMOVE_ONE_NONFRIEND";
const GET_ALL_SEARCH_NONFRIENDS = 'routes/GET_SEARCHED_NONFRIENDS';

const loadAllNonFriends = (friends, id) => ({
    type: GET_ALL_NON_FRIENDS,
    payload: friends,
    id,
  });

const removeOneNonFriend = (friends, user_id) => ({
    type: REMOVE_A_NON_FRIEND,
    payload: friends,
    user_id
});

const searchNonFriends = (friends, userId) => {
    return {
      type: GET_ALL_SEARCH_NONFRIENDS,
      payload: friends,
      userId
    }
  }

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

export const searchAllNonFriends = (userId, searchTerm) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/discover/${searchTerm}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(searchNonFriends(data));
    }
  };

export const removeNonFriend = (payload) => async (dispatch) => {
      dispatch(removeOneNonFriend(payload));
    }

export default function nonFriendReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_ALL_NON_FRIENDS:
            newState = {};
            Object.values(action.payload.nonfriends).forEach(user => {
                newState[user.id] = user;
              })
            const copiedState = {...newState}
            const copiedObjState = Object.values(copiedState)
            return copiedObjState;
        case REMOVE_A_NON_FRIEND:
            newState = {...state};
            delete newState[action.payload.friend_id];
            // const copyState = {...newState}
            return newState;
        case GET_ALL_SEARCH_NONFRIENDS:
            newState = {...state}
            let searchedUsersArr = Object.values(...action.payload.nonfriends);
            let try1 = Object.values(searchedUsersArr)
            newState.searchedNonFriends = try1
            return newState
        default:
            return state;
    }
}
