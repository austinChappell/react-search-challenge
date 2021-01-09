import { useRepeatedTimer } from 'hooks/useRepeatedTimer';
import { useCallback, useContext, useEffect } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';

export const useGetProfiles = async () => {
  const { dispatch, hasFetched } = useContext(ProfileContext);

  const fetchProfiles = useCallback(async () => {
    try {
      const response = await fetch('./profiles.json');

      const profiles: Profile[] = await response.json();

      dispatch({
        payload: { profiles },
        type: 'setProfiles',
      });
    } catch (error) {
      console.error('error fetching profiles : ', error);
    }
  }, [dispatch]);

  useRepeatedTimer(10, fetchProfiles);

  useEffect(() => {
    if (!hasFetched) {
      fetchProfiles();
    }
  }, [fetchProfiles, hasFetched]);
};
