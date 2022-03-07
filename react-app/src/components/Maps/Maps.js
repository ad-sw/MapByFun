import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const styles = require('./mapStyling.json')

const containerStyle = {
  width: '1380px',
  height: '670px',
};

const center = {
  lat: 40.46000284306324,
  lng: -77.38512762101064,
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
          options={{styles: styles, mapTypeId:'terrain'}}
          className="map"
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10.15}
        />
      )}
    </>
  );
};

export default React.memo(Maps);
