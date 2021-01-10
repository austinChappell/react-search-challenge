import { useGetProfile } from 'api/profiles/hooks';
import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileContext } from 'state/ProfilesContextProvider';

const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { isFetching } = useContext(ProfileContext);

  const profile = useGetProfile(Number(id));

  if (isFetching) {
    return <p>Loading...</p>;
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
