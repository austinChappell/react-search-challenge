import React from 'react';
import styled from '@emotion/styled';

import { ProfileContext } from '../ProfilesContextProvider';
import Header from '../Header';
import Filters from './Filters';
import Results from './Results';

const Main = styled.main({
  margin: 24,
});

class SearchPage extends React.Component {
  static contextType = ProfileContext;
  context!: React.ContextType<typeof ProfileContext>;

  handleSortAscending = () => {
    this.context.dispatch({ type: 'ascending' });
  };

  handleSortDescending = () => {
    this.context.dispatch({ type: 'descending' });
  };

  render() {
    return (
      <React.Fragment>
        <Header />

        <Main>
          <Filters />

          <Results />
        </Main>
      </React.Fragment>
    );
  }
}

export default SearchPage;
