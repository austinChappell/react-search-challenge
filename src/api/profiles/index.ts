import { fetchData } from 'api';
import { Dispatch } from 'react';

import { ProfilesContextAction } from 'state/ProfilesContextProvider';

export const fetchProfiles = async () => {
  const response: UserListResponse = await fetchData('/user');

  return response.data;
};

export const fetchFullProfile = async (id: string) => {
  const response: UserFullProfile = await fetchData(`/user/${id}`);

  return response;
};

export const getProfiles = async (dispatch: Dispatch<ProfilesContextAction>) => {
  dispatch({
    type: 'fetchProfiles',
  });

  try {
    const profiles = await fetchProfiles();

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

export const getFullProfile = async (id: string, dispatch: Dispatch<ProfilesContextAction>) => {
  dispatch({
    type: 'toggleIsFetchingFullProfile',
  });

  try {
    const profile = await fetchFullProfile(id);

    dispatch({
      payload: {
        profile,
      },
      type: 'setFullProfile',
    });
  } catch (error) {
    console.error(error);
    dispatch({
      payload: {
        errorMessage: 'Unable to load this profile.',
        profileId: id,
      },
      type: 'fetchFullProfileError',
    });
  }
};
