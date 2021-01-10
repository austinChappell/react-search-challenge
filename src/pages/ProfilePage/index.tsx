// External Dependencies
import styled from '@emotion/styled';
import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';

// Internal Dependencies
import { useGetProfile } from 'api/profiles/hooks';
import ErrorMessage from 'components/shared/ErrorMessage';
import SearchCard from 'components/shared/SearchCard';
import { ProfileContext } from 'state/ProfilesContextProvider';

// Local Dependencies
import Contact from './Contact';
import DetailsCard from './DetailsCard';
import Page from 'components/Page';

// Local Variables
const Container = styled.section({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

// Component Definition
const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { isFetchingFullProfile } = useContext(ProfileContext);

  const profile = useGetProfile(id);

  return (
    <Page isLoading={isFetchingFullProfile}>
      {profile ? (
        <Container>
          <SearchCard
            dateOfBirth={profile.dateOfBirth}
            firstName={profile.firstName}
            picture={profile.picture}
            location={profile.location}
          />

          <Contact email={profile.email} phone={profile.phone} />

          <DetailsCard
            dateOfBirth={profile.dateOfBirth}
            firstName={profile.firstName}
            gender={profile.gender}
            lastName={profile.lastName}
            location={profile.location}
            registerDate={profile.registerDate}
          />
        </Container>
      ) : (
        <ErrorMessage>Profile not found...</ErrorMessage>
      )}
    </Page>
  );
};

export default ProfilePage;
