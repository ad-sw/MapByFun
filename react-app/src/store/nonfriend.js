const GET_ALL_NON_FRIENDS = "nonfriends/GET_NONFRIENDS";
const REMOVE_A_NON_FRIEND = "nonfriends/REMOVE_ONE_NONFRIEND";

const loadAllNonFriends = (friends, id) => ({
    type: GET_ALL_NON_FRIENDS,
    payload: friends,
    id,
  });

const removeOneNonFriend = (friends, id) => ({
    type: REMOVE_A_NON_FRIEND,
    payload: friends,
    id,
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
            return newState;
        case REMOVE_A_NON_FRIEND:
            newState = {...state};
            console.log(newState, 'newstateee')
            console.log(action.payload, 'testtttt')
            delete newState[action.payload.friend_id];
            return newState;
        default:
            return state;
    }
}
