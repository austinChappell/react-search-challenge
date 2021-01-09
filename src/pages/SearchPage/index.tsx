import { useGetProfiles } from 'api/profiles/hooks';
import React, { FC } from 'react';

import Filters from './Filters';
import Results from './Results';

const SearchPage: FC = () => {
  useGetProfiles();

  return (
    <>
      <Filters />

      <Results />
    </>
  );
};

export default SearchPage;
