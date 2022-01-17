import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '1380px',
  height: '690px',
};

const center = {
  lat: 46,
  lng: 77.0369,
};

const Maps = ({ apiKey, zoom }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          className="map"
          mapContainerStyle={containerStyle}
          center={center}
          zoom={7}
        />
      )}
    </>
  );
};

export default React.memo(Maps);
