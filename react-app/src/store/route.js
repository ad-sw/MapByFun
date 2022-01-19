const GET_ALL_ROUTES = 'routes/GET_ALL';
const GET_ONE_ROUTE = 'routes/GET_ONE';
const CREATE_ONE_ROUTE = 'routes/CREATE_ONE';
const GET_ONE_FRIEND_ROUTES = 'friends/GET_FRIEND_ROUTES';
const EDIT_ONE_ROUTE = 'routes/EDIT_ONE';
const DELETE_ONE_ROUTE = 'routes/DELETE_ONE';
const GET_ALL_SEARCHED_USER_ROUTES = 'routes/GET_SEARCHED_USER_ROUTES'
const GET_ALL_SEARCHED_FRIEND_ROUTES = 'routes/GET_SEARCHED_FRIEND_ROUTES'

const loadAllRoutes = (routes) => {
  return {
      type: GET_ALL_ROUTES,
      payload: routes
  }
}

const loadOneRoute = (oneRoute) => {
  return {
    type: GET_ONE_ROUTE,
    payload: oneRoute
  }
}

const loadOneFriendRoutes = (routes, userId) => ({
  type: GET_ONE_FRIEND_ROUTES,
  payload: routes,
  userId
})

const createOneRoute = (oneRoute) => {
  return {
    type: CREATE_ONE_ROUTE,
    payload: oneRoute
  }
}

const editOneRoute = (oneRoute) => {
  return {
    type: EDIT_ONE_ROUTE,
    payload: oneRoute
  }
}

const deleteOneRoute = (routeId) => {
    return {
      type: DELETE_ONE_ROUTE,
      payload: routeId
    }
  }

const searchRoutes = (routes, userId) => {
  return {
    type: GET_ALL_SEARCHED_USER_ROUTES,
    payload: routes,
    userId
  }
}

const searchFriendRoutes = (routes, userId) => {
  return {
    type: GET_ALL_SEARCHED_FRIEND_ROUTES,
    payload: routes,
    userId
  }
}

export const getAllRoutes = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/routes`)
    if (response.ok) {
        const data = await response.json();
        dispatch(loadAllRoutes(data))
        return data;
      } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ['An error occurred. Please try again.']
      }
}

export const getOneRoute = (id) => async(dispatch) => {
    const response = await fetch(`/api/routes/${id}`)
    if(response.ok) {
      const data = await response.json()
      dispatch(loadOneRoute(data))
      return data
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

export const createRoute = (payload) => async(dispatch) => {
  const response = await fetch(`/api/routes/`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    const data = await response.json()
    dispatch(createOneRoute(data))
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

export const editRoute = (payload) => async(dispatch) => {
  const response = await fetch(`/api/routes/${payload.id}/edit`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    const data = await response.json()
    dispatch(editOneRoute(data))
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

export const deleteRoute = (routeId) => async(dispatch) => {
  const response = await fetch(`/api/routes/${routeId}/delete`, {
    method: 'DELETE',
  })
  if(response.ok) {
    dispatch(deleteOneRoute(routeId))
  } else if (response.status < 500){
    const data = await response.json()
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const searchAllRoutes = (userId, searchTerm) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/explore/${searchTerm}`);

  if (response.ok) {
      const data = await response.json();
      dispatch(searchRoutes(data));
  }
};

export const searchAllFriendRoutes = (userId, searchTerm) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/browse/${searchTerm}`);

  if (response.ok) {
      const data = await response.json();
      dispatch(searchFriendRoutes(data));
  }
};

export default function routeReducer (state = {}, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_ROUTES:
      newState = {};
      action.payload.routes.forEach(route => {
          newState[route.id] = route;
        })
      return newState;
    case GET_ONE_ROUTE:
      newState = {...state};
      newState[action.payload.id] = action.payload;
      return newState;
    case GET_ONE_FRIEND_ROUTES:
      newState = {};
      action.payload.routes.forEach(route => {
          newState[route.id] = route;
        })
      return newState;
    case CREATE_ONE_ROUTE:
      newState = {...state};
      newState[action.payload.id] = action.payload;
      return newState;
    case EDIT_ONE_ROUTE:
      newState = {...state};
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_ONE_ROUTE:
      newState = {...state};
      delete newState[action.payload];
      return newState;
    case GET_ALL_SEARCHED_USER_ROUTES:
      newState = {...state}
      const searchState = newState.searchedRoutes = action.payload.routes
      return searchState
    case GET_ALL_SEARCHED_FRIEND_ROUTES:
      newState = {...state}
      const searchStated = newState.searchedFriendRoutes = action.payload.routes
      return searchStated
    default:
      return state;
  }
}
