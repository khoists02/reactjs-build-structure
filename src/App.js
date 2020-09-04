import React from 'react';
import { Router, Switch } from 'react-router-dom';
import history from './services/history';
import routes from './routes';
import AppRoute from './routes/AppRoute';
import Main from './components/Main';

const App = () => {
  const articleLayout = history.location.pathname.indexOf('/articles') > -1;
  const adminLayout = history.location.pathname.indexOf('/admin') > -1 ||
    history.location.pathname.indexOf('/admin-authen') > -1;
  return (
    <Router history={history}>
      <Main articleLayout={articleLayout} adminLayout={adminLayout}>
        <Switch>
          {routes.map(route => (
            <AppRoute
              key={route.id}
              path={route.path}
              component={route.component}
              isPrivateDashboard={route.isPrivateDashboard}
              isPrivateAdmin={route.isPrivateAdmin}
            ></AppRoute>
          ))}
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
