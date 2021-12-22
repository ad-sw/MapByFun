import React, { useState } from 'react';
import RouteEditForm from './RouteEditForm';
import "./RouteEditForm.css";

export default function RouteEditPage({routeId}) {
  // const {routeId} = useParams();

  return (
    <>
          <RouteEditForm routeId={routeId}/>
    </>
  );
}
