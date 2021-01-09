import { paths } from 'constants/paths';
import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchPage from './SearchPage';

const Routes: FC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <SearchPage />
      </Route>

      <Route path={`/${paths.profiles}/:id`}>
        <SearchPage />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
