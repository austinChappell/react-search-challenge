// External Dependencies
import React, { FC } from 'react';

// Internal Dependencies
import { useGetProfiles } from 'api/profiles/hooks';
import Page from 'components/layout/Page';
import { useProfilesState } from 'state/hooks';

// Local Dependencies
import Filters from './Filters';
import Results from './Results';

// Component Definition
const SearchPage: FC = () => {
  const { hasFetched } = useProfilesState();

  useGetProfiles();

  return (
    <Page isLoading={!hasFetched} title="Profiles">
      <Filters />

      <Results />
    </Page>
  );
};

export default SearchPage;
