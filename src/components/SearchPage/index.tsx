import React, { FC } from 'react';
import styled from '@emotion/styled';

import Header from '../Header';
import Filters from './Filters';
import Results from './Results';

const Main = styled.main({
  margin: 24,
});

const SearchPage: FC = () => (
  <>
    <Header />

    <Main>
      <Filters />

      <Results />
    </Main>
  </>
);

export default SearchPage;
