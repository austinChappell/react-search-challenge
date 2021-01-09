import React, { FC } from 'react';

import Filters from './Filters';
import Results from './Results';

const SearchPage: FC = () => {
  return (
    <>
      <Filters />

      <Results />
    </>
  );
};

export default SearchPage;
