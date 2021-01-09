import { Dispatch } from 'react';

import { ProfilesContextAction } from 'state/ProfilesContextProvider';

// using this mock an API delay
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchProfiles = async () => {
  await sleep(500);

  const response = await fetch(`${process.env.PUBLIC_URL}/profiles.json`);

  const profiles: Profile[] = await response.json();

  return profiles;
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
