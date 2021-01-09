import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';
import { fetchProfiles } from '.';

export const useGetProfiles = async () => {
  const { dispatch, hasFetched, isFetching, isFiltered } = useContext(ProfileContext);

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
    if (!hasFetched) {
      dispatch({
        type: 'fetchProfiles',
      });
    }
  }, [dispatch, hasFetched]);
};

export const useGetProfile = (id: number) => {
  const [profile, setProfile] = useState<Profile | null>(null);

  const { profiles } = useContext(ProfileContext);

  useEffect(() => {
    setProfile(profiles.find((profile) => profile.id === id) ?? null);
  }, [id, profiles]);

  return profile;
};
