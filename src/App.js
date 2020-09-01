import React from 'react';
import { Router, Switch } from 'react-router-dom';
import history from './services/history';
import routes from './routes';
import AppRoute from './routes/AppRoute';
import Main from './components/Main';

function App() {
  return (
    <Main>
      <Router history={history}>
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
      </Router>
    </Main>
  );
}

export default App;
