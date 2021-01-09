import { useGetProfiles } from 'api/hook/profiles';
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
