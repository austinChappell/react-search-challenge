import { paths } from 'constants/paths';
import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProfilePage from 'pages/ProfilePage';
import SearchPage from 'pages/SearchPage';

const Routes: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <SearchPage />
      </Route>

      <Route path={`/${paths.profiles}/:id`}>
        <ProfilePage />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
