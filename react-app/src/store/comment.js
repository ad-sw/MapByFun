const CREATE_ONE_COMMENT = 'comment/CREATE_ONE';
const EDIT_ONE_COMMENT = 'comment/EDIT_ONE';
const DELETE_ONE_COMMENT = 'comment/DELETE_ONE';

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

export const createComment = (comment) => async(dispatch) => {
    const response = await fetch(`/api/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        comment
      )
    })
    console.log(comment, 'this is the comment')
    if (response.ok) {
      const data = await response.json()
      dispatch(createOneComment(data))
      console.log(data, ' this is the comments data')
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

  export const editComment = (payload, commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}/edit`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    console.log(payload, commentId, 'this is edit comment')
    if (response.ok) {
      const data = await response.json()
      dispatch(editOneComment(data))
      console.log(data, ' this is edits comments data')
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

let initialState = {routes: [], currentRoute: []}

const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        // case CREATE_ONE_COMMENT:
        //   newState = {...state}
        //   console.log(state, 'this should be')
        //   newState.currentRoute = action.payload
        //   console.log(state, 'this should be')
        //   newState.currentRoute.comments.push([action.payload.content, action.payload.id])
        //   console.log(newState.currentRoute, 'trying')
        //   return newState
        // case EDIT_ONE_COMMENT:
        //   newState = {...state}
        //   const commentIdx = newState.currentRoute.comments.findIndex(comment =>comment[1] === action.payload.id)
        //   newState.currentRoute[commentIdx] = action.payload
        //   // newState.currentRoute = action.payload
        //   newState.currentRoute = [...newState.currentRoute]
        //   return newState
        // case DELETE_ONE_COMMENT:
        //   newState = {...state}
        //   let newComments = newState.currentRoute.comments.filter(comment => comment[1] !== Number(action.payload))
        //   console.log(newComments, 'hiii')
        //   newState.currentRoute.comments = newComments
        //   return newState
        default:
            return state;
    }
};

export default commentReducer;
