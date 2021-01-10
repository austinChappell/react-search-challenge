import styled from '@emotion/styled';
import { useGetProfile } from 'api/profiles/hooks';
import ErrorMessage from 'components/shared/ErrorMessage';
import LoadingSpinner from 'components/shared/LoadingSpinner';
import SearchCard from 'components/shared/SearchCard';
import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileContext } from 'state/ProfilesContextProvider';
import Contact from './Contact';
import DetailsCard from './DetailsCard';

const Container = styled.section({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { isFetchingFullProfile } = useContext(ProfileContext);

  const profile = useGetProfile(id);

  if (isFetchingFullProfile) {
    return <LoadingSpinner />;
  }

  if (!profile) {
    return <ErrorMessage>Profile not found...</ErrorMessage>;
  }

  console.log(profile);

  return (
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
  );
};

export default ProfilePage;
