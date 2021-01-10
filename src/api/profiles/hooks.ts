import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';
import { getFullProfile, getProfiles } from '.';

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

export const useGetProfile = (id: string) => {
  const { byId, dispatch } = useContext(ProfileContext);

  useEffect(() => {
    if (!byId[id]) {
      getFullProfile(id, dispatch);
    }
  }, [byId, dispatch, id]);

  return byId[id];
};
