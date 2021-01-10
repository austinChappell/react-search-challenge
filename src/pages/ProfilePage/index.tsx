import { useGetProfile } from 'api/profiles/hooks';
import LoadingSpinner from 'components/shared/LoadingSpinner';
import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileContext } from 'state/ProfilesContextProvider';

const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { isFetchingFullProfile } = useContext(ProfileContext);

  const profile = useGetProfile(id);

  if (isFetchingFullProfile) {
    return <LoadingSpinner />;
  }

  if (!profile) {
    return <p>Profile not found...</p>;
  }

  return (
    <>
      <h2>{profile.email}</h2>

      <img alt="potential date" src={profile.picture} />
    </>
  );
};

export default ProfilePage;
