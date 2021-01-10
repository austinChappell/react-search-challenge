// External Dependencies
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Internal Dependencies
import { useGetProfiles } from 'api/profiles/hooks';
import SearchCard from 'components/shared/SearchCard';
import { paths } from 'constants/paths';

// Local Variables
const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gridGap: 16,
});

// Component Definition
const Results: FC = () => {
  const profiles = useGetProfiles();

  return (
    <Grid>
      {profiles.map((profile) => (
        <Link to={`/${paths.profiles}/${profile.id}`} key={profile.id}>
          <SearchCard firstName={profile.firstName} picture={profile.picture} />
        </Link>
      ))}
    </Grid>
  );
};

export default Results;
