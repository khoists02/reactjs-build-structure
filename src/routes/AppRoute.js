import React from 'react';

import { Route } from 'react-router-dom';

export default function AppRoute({
  component: Component,
  path,
  exact,
  isPrivate,
  ...props
}) {
  return (
    <Route
      exact={exact}
      path={path}
      render={props => isPrivate ? (<div>Un Authenticated</div>) : (<Component {...props} />)}
      { ... props }
    />
  );
} 