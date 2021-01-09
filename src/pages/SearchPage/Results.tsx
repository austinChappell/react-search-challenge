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
          age={profile.age}
          handle={profile.handle}
          id={profile.id}
          key={profile.id}
          location={profile.location}
          photoCount={profile.photoCount}
          photoUrl={profile.photoUrl}
        />
      ))}
    </Grid>
  );
};

export default Results;
