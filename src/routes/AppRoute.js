import React, { useState, useEffect } from 'react';

import { Route, Redirect } from 'react-router-dom';
import AuthenAdmin from '../domain/AuthenAdmin';

export default function AppRoute({
  component: Component,
  path,
  exact,
  isPrivateDashboard,
  isPrivateAdmin,
  key,
  id,
  ...props
}) {
  const [ isAuthenAdmin, setIsAuthenAdmin ] = useState(false);
  useEffect(()=> {
    const user = JSON.parse(localStorage.getItem('user'));
    setIsAuthenAdmin(user?.userName === 'lekhoi' && user?.password === '1234567!@#$%^&');
    // window.location.reload();
  }, [props.path]);
  return (
    <Route
      key={key}
      exact={exact}
      path={path}
      render={props =>
        isPrivateDashboard ? (<div>Un Authenticated</div>) :
        isPrivateAdmin ? (isAuthenAdmin ? <Component {...props} /> : <AuthenAdmin></AuthenAdmin>) :
        !isPrivateDashboard && !isPrivateAdmin ?
        (<Component {...props} />): (<div>NOT FOUND</div>)}
      { ... props }
    />
  );
} 