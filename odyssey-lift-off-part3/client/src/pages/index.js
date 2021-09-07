import React, { Fragment } from 'react';
import { Router } from '@reach/router';
/** importing our pages */
import Tracks from './tracks';
import Track from './track';

// if we go to this path, or URL, in our browser, 
// and give it a trackId like c_0 for example, 
// it will display the Track page
export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <Track path="/track/:trackId" />
    </Router>
  );
}
