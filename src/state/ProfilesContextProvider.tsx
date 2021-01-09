import React, { Dispatch, FC, Reducer } from 'react';

interface State {
  dispatch: Dispatch<Action>;
  hasFetched: boolean;
  profiles: Profile[];
}

interface AscendingAction {
  type: 'ascending';
}
interface DescendingAction {
  type: 'descending';
}
interface SetProfilesAction {
  payload: {
    profiles: Profile[];
  };
  type: 'setProfiles';
}

type Action = AscendingAction | DescendingAction | SetProfilesAction;

const initialState: Omit<State, 'dispatch'> = {
  hasFetched: false,
  profiles: [],
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

    case 'setProfiles':
      return {
        ...state,
        hasFetched: true,
        profiles: action.payload.profiles,
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
