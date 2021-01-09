import { useRepeatedTimer } from 'hooks/useRepeatedTimer';
import { useContext, useEffect } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';

export const useFetchProfilesTimer = () => {
  const { dispatch, isTimerRunning } = useContext(ProfileContext);

  const seconds = useRepeatedTimer(10, isTimerRunning);

  useEffect(() => {
    dispatch({
      payload: {
        seconds,
      },
      type: 'setTimer',
    });
  }, [dispatch, seconds]);
};

export const useGetProfiles = async () => {
  const { dispatch, hasFetched, secondsUntilRefetch } = useContext(ProfileContext);

  useFetchProfilesTimer();

  useEffect(() => {
    const fetchProfiles = async () => {
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
    };

    if (!hasFetched || secondsUntilRefetch === 0) {
      fetchProfiles();
    }
  }, [dispatch, hasFetched, secondsUntilRefetch]);
};
