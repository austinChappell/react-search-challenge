import { useEffect, useState } from 'react';
import { useProfilesDispatch, useProfilesState } from 'state/hooks';
import { getFullProfile, getProfiles } from '.';

export const useGetProfiles = () => {
  const { hasFetched, isFetching, isFiltered, profiles } = useProfilesState();
  const dispatch = useProfilesDispatch();

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
  const { byId } = useProfilesState();
  const dispatch = useProfilesDispatch();

  useEffect(() => {
    if (byId[id] === undefined) {
      getFullProfile(id, dispatch);
    }
  }, [byId, dispatch, id]);

  return byId[id];
};
