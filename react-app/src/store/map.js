const LOAD_API_KEY = 'maps/LOAD_API_KEY';

const loadApiKey = (key) => ({
  type: LOAD_API_KEY,
  payload: key,
});

export const getKey = () => async (dispatch) => {
  const res = await fetch('/api/maps/key', {
    method: 'POST',
  });
  const data = await res.json();
  dispatch(loadApiKey(data.api_key));
};

export const getGeoCoordinates = (address) => async (dispatch) => {
  const res = await fetch('/api/maps/coordinates', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      address
    })
  })

  const data = await res.json()
  return data;
}

const initialState = { key: null };

const mapsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_API_KEY:
      return { key: action.payload };
    default:
      return state;
  }
};

export default mapsReducer;
