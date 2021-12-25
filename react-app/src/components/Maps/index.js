import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getKey } from '../../store/map';

import Maps from './Maps'

const MapContainer = ({ zoom }) => {
  console.log(zoom, 'thisis zoom')
  const key = useSelector((state) => state.maps.key);
  const dispatch = useDispatch();

  // const [latAvg, setLatAvg] = useState(0)
  // const [longAvg, setLongAvg] = useState(0)

  useEffect(() => {
    if (!key) {
      dispatch(getKey());
    }
  }, [dispatch, key]);

  if (!key) {
    return null;
  }


  return (
    <Maps apiKey={key} zoom={7}/>
  );
};

export default MapContainer;
