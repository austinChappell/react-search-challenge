// External Dependencies
import React, { FC, useContext } from 'react';

// Internal Dependencies
import { useGetProfiles } from 'api/profiles/hooks';
import Page from 'components/Page';
import { ProfileContext } from 'state/ProfilesContextProvider';

// Local Dependencies
import Filters from './Filters';
import Results from './Results';

// Component Definition
const SearchPage: FC = () => {
  const { hasFetched } = useContext(ProfileContext);

  useGetProfiles();

  return (
    <Page isLoading={!hasFetched}>
      <Filters />

      <Results />
    </Page>
  );
};

export default SearchPage;
