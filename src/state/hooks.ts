import { useContext } from 'react';
import { ProfileDispatchContext, ProfileStateContext } from './ProfilesContextProvider';

export const useProfilesDispatch = () => useContext(ProfileDispatchContext);

export const useProfilesState = () => useContext(ProfileStateContext);
