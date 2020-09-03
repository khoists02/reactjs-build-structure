import React from 'react';
import { Router, Switch, Link } from 'react-router-dom';
import history from './services/history';
import routes from './routes';
import AppRoute from './routes/AppRoute';
import Main from './components/Main';

const App = () => {
  return (
    <Router history={history}>
      <Main>
        <Switch>
          {routes.map(route => (
            <AppRoute
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            ></AppRoute>
          ))}
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
