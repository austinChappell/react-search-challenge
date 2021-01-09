import React, { Dispatch, FC, Reducer } from 'react';
import mockProfiles from '../profiles.json';

interface State {
  dispatch: Dispatch<Action>;
  profiles: Profile[];
}

interface Action {
  type: 'ascending' | 'descending';
}

const initialState: Omit<State, 'dispatch'> = {
  profiles: mockProfiles,
};

export const ProfileContext = React.createContext(initialState as State);

const profilesReducer: Reducer<State, Action> = (state, action) => {
  let profiles;

  switch (action.type) {
    case 'ascending':
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.handle > profileB.handle ? 1 : -1));
      return {
        ...state,
        profiles,
      };

    case 'descending':
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.handle < profileB.handle ? 1 : -1));
      return {
        ...state,
        profiles,
      };

    default:
      throw new Error();
  }
};

const ProfilesContextProvider: FC = ({ children }) => {
  const [state, dispatch] = React.useReducer<Reducer<State, Action>>(
    profilesReducer,
    initialState as State
  );

  return (
    <ProfileContext.Provider value={{ ...state, dispatch }}>{children}</ProfileContext.Provider>
  );
};

export default ProfilesContextProvider;
