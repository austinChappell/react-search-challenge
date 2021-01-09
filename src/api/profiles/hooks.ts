import { useRepeatedTimer } from 'hooks/useRepeatedTimer';
import { useContext, useEffect, useState } from 'react';
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
      console.log('going to get them');
      const getProfiles = async () => {
        try {
          const profiles = await fetchProfiles(isFiltered);

          console.log('dispatching : ', profiles);

          dispatch({
            payload: { profiles },
            type: 'setProfiles',
          });
        } catch (error) {
          console.error(error);
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
      console.log('lets go get some profiles ');
      dispatch({
        type: 'fetchProfiles',
      });
    }
  }, [dispatch, hasFetched, secondsUntilRefetch]);
};

export const useGetProfile = (id: number) => {
  const [profile, setProfile] = useState<Profile | null>(null);

  const { profiles } = useContext(ProfileContext);

  useEffect(() => {
    setProfile(profiles.find((profile) => profile.id === id) ?? null);
  }, [id, profiles]);

  return profile;
};
