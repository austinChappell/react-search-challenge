// External Dependencies
import React, { FC } from 'react';

// Local Dependencies
import Filters from './Filters';
import Results from './Results';

// Component Definition
const SearchPage: FC = () => {
  return (
    <>
      <Filters />

      <Results />
    </>
  );
};

export default SearchPage;
