import React, { useState } from 'react';
import RouteEditForm from './RouteEditForm';
import "./RouteEditForm.css";

export default function RouteEditPage({routeId}) {

  return (
    <div>
          <RouteEditForm routeId={routeId}/>
    </div>
  );
}
