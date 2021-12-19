const GET_ALL_ROUTES = 'routes/GET_ALL'
const GET_ONE_ROUTE = 'routes/GET_ONE'
const CREATE_ONE_ROUTE = 'routes/POST_ONE'
// const EDIT_ONE_ROUTE = 'routes/EDIT_ONE'
const REMOVE_ONE_ROUTE = 'routes/REMOVE_ONE'

const setAllRoutes = (allRoutes) => {
    return {
        type: GET_ALL_ROUTES,
        payload: allRoutes
    }
}

const getOneRoute = (oneRoute) => {
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

// const editOneRoute = (oneRoute) => {
//   return {
//     type: EDIT_ONE_ROUTE,
//     payload: oneRoute
//   }
// }


const removeOneRoute = (id) => {
    return {
      type: REMOVE_ONE_ROUTE,
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

export const oneRoute = (id) => async(dispatch) => {
    const response = await fetch(`/api/routes/${id}`)
    if(response.ok) {
      const data = await response.json()
      dispatch(getOneRoute(data))
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

export const createRoute = (routeInfo) => async(dispatch) => {
  const response = await fetch(`/api/routes/`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(routeInfo)
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

// export const editRoute = (id, routeInfo) => async(dispatch) => {
//   const response = await fetch(`/api/routes/${id}`, {
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(routeInfo)
//   });
//   if (response.ok) {
//     const data = await response.json()
//     dispatch(editOneRoute(data))
//     return null;
//   } else if (response.status < 500){
//     const data = await response.json()
//     if (data.errors) {
//       return data.errors
//     }
//   } else {
//     return ['An error occurred. Please try again.']
//   }
// }

export const removeRoute = (id) => async(dispatch) => {
  const response = await fetch(`/api/routes/${id}/delete`, {
    method: 'DELETE',
  })
  if(response.ok) {
    dispatch(removeOneRoute(id))
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

const routeReducer = (state = initialState, action) => {
  let newState
    switch (action.type) {
        case GET_ALL_ROUTES:
          newState = {...state}
          newState.routes = action.payload.routes
          return newState
        case GET_ONE_ROUTE:
          newState = {...state}
          newState.currentRoute = action.payload
          return newState
        case CREATE_ONE_ROUTE:
          newState = {...state}
          newState.routes.push(action.payload)
          return newState
        default:
            return state;
      // case EDIT_ONE_ROUTE:
      //    newState = {...state}
      //    const routeIdx = newState.routes.findIndex(route => route.id === action.payload.id)
      //    newState.routes[routeIdx] = action.payload
      //    newState.currentRoute = action.payload
      //    return newState
        case REMOVE_ONE_ROUTE:
         newState = {...state}
         console.log(state.action, 'test payload')
         const routeRIdx = newState.routes.findIndex(route => route.id === parseInt(action.payload))
         newState.routes.splice(routeRIdx, 1)
         return newState
    }
}
export default routeReducer
