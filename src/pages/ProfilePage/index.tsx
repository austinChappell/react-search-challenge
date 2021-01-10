// External Dependencies
import styled from '@emotion/styled';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

// Internal Dependencies
import { useGetProfile } from 'api/profiles/hooks';
import ErrorMessage from 'components/shared/ErrorMessage';
import Page from 'components/layout/Page';
import SearchCard from 'components/shared/SearchCard';
import { useProfilesState } from 'state/hooks';

// Local Dependencies
import Contact from './Contact';
import DetailsCard from './DetailsCard';

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

  const { fullProfileErrorMessage, isFetchingFullProfile } = useProfilesState();

  const profile = useGetProfile(id);

  const isLoading = isFetchingFullProfile || profile === undefined;

  return (
    <Page isLoading={isLoading} title={profile?.firstName ?? 'Profile'}>
      <Container>
        {profile ? (
          <>
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
          </>
        ) : (
          <ErrorMessage>{fullProfileErrorMessage ?? 'Profile not found...'}</ErrorMessage>
        )}
      </Container>
    </Page>
  );
};

export default ProfilePage;
