import React, { FC } from 'react';

import Filters from './Filters';
import Results from './Results';

const SearchPage: FC = () => (
  <>
    <Filters />

    <Results />
  </>
);

export default SearchPage;
