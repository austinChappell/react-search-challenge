import { useRepeatedTimer } from 'hooks/useRepeatedTimer';
import { useContext, useEffect } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';
import { fetchProfiles } from '.';

export const useFetchProfilesTimer = () => {
  const { dispatch, isFiltered, isTimerRunning } = useContext(ProfileContext);

  const { reset, seconds } = useRepeatedTimer(10, isTimerRunning);

  useEffect(() => {
    dispatch({
      payload: {
        seconds,
      },
      type: 'setTimer',
    });
  }, [dispatch, seconds]);

  useEffect(() => {
    reset();
  }, [isFiltered, reset]);
};

export const useGetProfiles = async () => {
  const { dispatch, hasFetched, isFetching, isFiltered, secondsUntilRefetch } = useContext(
    ProfileContext
  );

  useFetchProfilesTimer();

  useEffect(() => {
    if (isFetching) {
      const getProfiles = async () => {
        try {
          const profiles = await fetchProfiles(isFiltered);

          dispatch({
            payload: { profiles },
            type: 'setProfiles',
          });
        } catch (error) {
          dispatch({
            payload: {
              errorMessage: 'Error getting profiles.',
            },
            type: 'fetchProfilesError',
          });
        }
      };

      getProfiles();
    }
  }, [dispatch, isFetching, isFiltered]);

  useEffect(() => {
    if (!hasFetched || secondsUntilRefetch === 0) {
      dispatch({
        type: 'fetchProfiles',
      });
    }
  }, [dispatch, hasFetched, secondsUntilRefetch]);
};
