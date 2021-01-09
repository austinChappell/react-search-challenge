import { useRepeatedTimer } from 'hooks/useRepeatedTimer';
import { useContext, useEffect } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';

// using this mock an API delay
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
  const { dispatch, hasFetched, isFetching, secondsUntilRefetch } = useContext(ProfileContext);

  useFetchProfilesTimer();

  useEffect(() => {
    if (isFetching) {
      const fetchProfiles = async () => {
        try {
          sleep(1000);

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

      fetchProfiles();
    }
  }, [dispatch, isFetching]);

  useEffect(() => {
    if (!hasFetched || secondsUntilRefetch === 0) {
      dispatch({
        type: 'fetchProfiles',
      });
    }
  }, [dispatch, hasFetched, secondsUntilRefetch]);
};
