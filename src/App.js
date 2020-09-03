import React from 'react';
import { Router, Switch, useLocation } from 'react-router-dom';
import history from './services/history';
import routes from './routes';
import AppRoute from './routes/AppRoute';
import Main from './components/Main';

const App = () => {
  // let location = useLocation();
  const articleLayout = history.location.pathname.indexOf('/articles') > -1;
  console.log(history.location.pathname); 
  return (
    <Router history={history}>
      <Main articleLayout={articleLayout}>
        <Switch>
          {routes.map(route => (
            <AppRoute
              key={route.id}
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
