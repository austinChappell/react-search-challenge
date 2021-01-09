import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';

import { ProfileContext } from '../ProfilesContextProvider';
import SearchCard from '../SearchCard';

const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridGap: 16,
});

const Results: FC = () => {
  const { profiles } = useContext(ProfileContext);

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
