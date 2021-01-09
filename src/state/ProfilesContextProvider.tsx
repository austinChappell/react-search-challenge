import React, { Dispatch, FC, Reducer } from 'react';

interface State {
  dispatch: Dispatch<Action>;
  hasFetched: boolean;
  isFetching: boolean;
  isTimerRunning: boolean;
  profiles: Profile[];
  secondsUntilRefetch: number;
}

interface AscendingAction {
  type: 'ascending';
}
interface DescendingAction {
  type: 'descending';
}
interface FetchProfilesAction {
  type: 'fetchProfiles';
}
interface SetProfilesAction {
  payload: {
    profiles: Profile[];
  };
  type: 'setProfiles';
}
interface SetTimerAction {
  payload: {
    seconds: number;
  };
  type: 'setTimer';
}
interface ToggleTimerAction {
  type: 'toggleIsTimerRunning';
}

type Action =
  | AscendingAction
  | DescendingAction
  | FetchProfilesAction
  | SetProfilesAction
  | SetTimerAction
  | ToggleTimerAction;

const initialState: Omit<State, 'dispatch'> = {
  hasFetched: false,
  isFetching: false,
  isTimerRunning: true,
  profiles: [],
  secondsUntilRefetch: 10,
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

    case 'fetchProfiles':
      return {
        ...state,
        isFetching: true,
        isTimerRunning: false,
      };

    case 'setProfiles':
      return {
        ...state,
        hasFetched: true,
        isFetching: false,
        isTimerRunning: true,
        profiles: action.payload.profiles,
      };

    case 'setTimer':
      return {
        ...state,
        hasFetched: true,
        secondsUntilRefetch: action.payload.seconds,
      };

    case 'toggleIsTimerRunning':
      return {
        ...state,
        isTimerRunning: !state.isTimerRunning,
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
