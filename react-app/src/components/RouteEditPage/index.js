import React, { useState } from 'react';
import RouteEditForm from './RouteEditForm';
import "./RouteEditForm.css";
import '../../../src/index.css'

export default function RouteEditPage({routeId}) {

  return (
    <div className="friendDashboardContainer">
          <RouteEditForm routeId={routeId}/>
    </div>
  );
}
