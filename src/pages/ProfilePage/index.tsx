import { useGetProfile, useGetProfiles } from 'api/profiles/hooks';
import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileContext } from 'state/ProfilesContextProvider';

const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { profiles } = useContext(ProfileContext);

  useGetProfiles();

  const profile = useGetProfile(Number(id));

  console.log('the profile : ', profile);
  console.log('profiles : ', profiles);

  return <div>Profile Page</div>;
};

export default ProfilePage;
