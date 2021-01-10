import React, { FC } from 'react';
import styled from '@emotion/styled';

import SearchCard from './SearchCard';
import { useGetProfiles } from 'api/profiles/hooks';

const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gridGap: 16,
});

const Results: FC = () => {
  const profiles = useGetProfiles();

  return (
    <Grid>
      {profiles.map((profile) => (
        <SearchCard
          email={profile.email}
          firstName={profile.firstName}
          id={profile.id}
          key={profile.id}
          lastName={profile.lastName}
          picture={profile.picture}
          title={profile.title}
        />
      ))}
    </Grid>
  );
};

export default Results;
