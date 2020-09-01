import React from 'react';

import { Route } from 'react-router-dom';

export default function AppRoute({
  component: Component,
  path,
  isPrivate,
  ...props
}) {
  return (
    <Route
      path={path}
      render={props => isPrivate ? (<div>Un Authenticated</div>) : (<Component {...props} />)}
      { ... props }
    />
  );
} 