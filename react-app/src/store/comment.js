const LOAD_ALL_COMMENTS_FOR_ROUTE = 'comment/LOAD_ALL_ROUTE_COMMENTS'
const CREATE_ONE_COMMENT = 'comment/CREATE_ONE';
const EDIT_ONE_COMMENT = 'comment/EDIT_ONE';
const DELETE_ONE_COMMENT = 'comment/DELETE_ONE';

const loadAllRouteComments = (comment) => ({
  type: LOAD_ALL_COMMENTS_FOR_ROUTE,
  payload: comment,
});

const createOneComment = (comment) => ({
    type: CREATE_ONE_COMMENT,
    payload: comment,
});

const editOneComment = (comment) => ({
    type: EDIT_ONE_COMMENT,
    payload: comment
});

const deleteOneComment = (id) => ({
    type: DELETE_ONE_COMMENT,
    payload: id
});

export const getAllRouteComments = (routeId) => async (dispatch) => {
  const response = await fetch(`/api/comments/${routeId}`);
  if (response.ok) {
      const data = await response.json();
      dispatch(loadAllRouteComments(data));
      return data;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ['An error occurred. Please try again.']
    }
};

export const createComment = (comment) => async(dispatch) => {
    const response = await fetch(`/api/comments/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(comment)
    })
    if (response.ok) {
      const data = await response.json()
      dispatch(createOneComment(data))
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

  export const editComment = (payload) => async (dispatch) => {
    const response = await fetch(`/api/comments/${payload.commentId}/edit`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      const data = await response.json()
      dispatch(editOneComment(data))
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

  export const deleteComment = (id) => async(dispatch) => {
    const response = await fetch(`/api/comments/${id}/delete`, {
      method: 'DELETE'
    })
    if(response.ok) {
      dispatch(deleteOneComment(id))
    } else if (response.status < 500){
      const data = await response.json()
      if (data.errors) {
        return data.errors
      }
    } else {
      return ['An error occurred. Please try again.']
    }
  }

export default function commentReducer (state = {}, action) {
  let newState;
  switch (action.type) {
      case LOAD_ALL_COMMENTS_FOR_ROUTE:
        newState = {};
        action.payload.comments.forEach(comment => {
          newState[comment.id] = comment;
          });
        return newState;
      case CREATE_ONE_COMMENT:
        newState = {...state};
        newState[action.payload.comment.id] = action.payload.comment
        return newState;
      case EDIT_ONE_COMMENT:
        newState = {...state};
        newState[action.payload.id] = action.payload;
        return newState;
      case DELETE_ONE_COMMENT:
        newState = {...state}
        delete newState[action.payload]
        return newState
      default:
          return state;
  }
};
