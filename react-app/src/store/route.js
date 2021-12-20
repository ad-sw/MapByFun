const GET_ALL_ROUTES = 'routes/GET_ALL'
const GET_ONE_ROUTE = 'routes/GET_ONE'
const CREATE_ONE_ROUTE = 'routes/CREATE_ONE'
const EDIT_ONE_ROUTE = 'routes/EDIT_ONE'
const DELETE_ONE_ROUTE = 'routes/DELETE_ONE'

const setAllRoutes = (allRoutes) => {
  return {
      type: GET_ALL_ROUTES,
      payload: allRoutes
  }
}

const setOneRoute = (oneRoute) => {
  return {
    type: GET_ONE_ROUTE,
    payload: oneRoute
  }
}

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

const deleteOneRoute = (id) => {
    return {
      type: DELETE_ONE_ROUTE,
      payload: id
    }
  }

export const getAllRoutes = () => async (dispatch) => {
    const response = await fetch('/api/routes/')
    if (response.ok) {
        const data = await response.json();
        dispatch(setAllRoutes(data))
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
      dispatch(setOneRoute(data))
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
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });
  console.log(response, 'this is the response')
  if (response.ok) {
    const data = await response.json()
    console.log(data, 'this is the data')

    dispatch(editOneRoute(data))
    console.log(data, 'this is the data again')
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

export const deleteRoute = (id) => async(dispatch) => {
  const response = await fetch(`/api/routes/${id}`, {
    method: 'DELETE',
  })
  if(response.ok) {
    dispatch(deleteOneRoute(id))
  } else if (response.status < 500){
    const data = await response.json()
    if (data.errors) {
      return data.errors
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

let initialState = {routes: [], currentRoute: []};

const routeReducer = (state = initialState, action) => {
  let newState;
    switch (action.type) {
      case GET_ALL_ROUTES:
        newState = {...state}
        newState.routes = action.payload.routes
        return newState
      case GET_ONE_ROUTE:
        newState = {...state}
        console.log('GET_ONE_ROUTE')
        newState.currentRoute = action.payload
        console.log('GET_ONE_ROUTE')
        return newState
      case CREATE_ONE_ROUTE:
        console.log('CREATE_ONE_ROUTE')
        newState = {...state}
        newState.routes.push(action.payload)
        console.log('CREATE_ONE_ROUTE')
        return newState
      case EDIT_ONE_ROUTE:
        newState = {...state}
        const routeIdx = newState.routes.findIndex(route =>route.id === action.payload.id)
        newState.routes[routeIdx] = action.payload
        newState.currentRoute = action.payload
        newState.routes = [...newState.routes]
        console.log('EDIT_ONE_ROUTE')
        return newState
      case DELETE_ONE_ROUTE:
        newState = {...state}
        let newRoutes = newState.routes.filter(route => route.id !== Number(action.payload))
        newState.routes = newRoutes
        return newState
      default:
        return state;
    }
}
export default routeReducer
