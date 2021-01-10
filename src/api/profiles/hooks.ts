import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';
import { getProfiles } from '.';

export const useGetProfiles = () => {
  const { dispatch, hasFetched, isFetching, isFiltered, profiles } = useContext(ProfileContext);

  const [localProfiles, setLocalProfiles] = useState(profiles);

  useEffect(() => {
    if (!hasFetched && !isFetching) {
      getProfiles(dispatch);
    }
  }, [dispatch, hasFetched, isFetching]);

  useEffect(() => {
    setLocalProfiles(isFiltered ? profiles.filter((profile) => profile.title !== 'mr') : profiles);
  }, [isFiltered, profiles]);

  return localProfiles;
};

export const useGetProfile = (id: number) => {
  // have to get all right now since there is not a live API
  useGetProfiles();

  const { byId } = useContext(ProfileContext);

  return byId[id];
};
