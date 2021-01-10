import { paths } from 'constants/paths';
import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProfilePage from 'pages/ProfilePage';
import SearchPage from 'pages/SearchPage';
import BaseLayout from 'components/layout/BaseLayout';

const Routes: FC = () => (
  <Router>
    <BaseLayout>
      <Switch>
        <Route exact path="/">
          <SearchPage />
        </Route>

        <Route path={`/${paths.profiles}/:id`}>
          <ProfilePage />
        </Route>
      </Switch>
    </BaseLayout>
  </Router>
);

export default Routes;
