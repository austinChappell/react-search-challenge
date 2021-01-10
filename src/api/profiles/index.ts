import { fetchData } from 'api';
import { Dispatch } from 'react';

import { ProfilesContextAction } from 'state/ProfilesContextProvider';

export const fetchProfiles = async () => {
  const response: UserListResponse = await fetchData('/user');

  return response.data;
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
