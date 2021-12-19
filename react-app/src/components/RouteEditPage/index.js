import React, { useState } from 'react';
import RouteEditForm from './RouteEditForm';
import "./RouteEditForm.css";

function RouteEditPage({routeId}) {
  return (
    <>
          <RouteEditForm routeId={routeId}/>
    </>
  );
}

export default RouteEditPage;
