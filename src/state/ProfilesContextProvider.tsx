import React, { Dispatch, FC, Reducer } from 'react';

interface State {
  byId: Record<number, Profile>;
  dispatch: Dispatch<Action>;
  errorMessage: string | null;
  hasFetched: boolean;
  isFetching: boolean;
  isFiltered: boolean;
  isTimerRunning: boolean;
  profiles: Profile[];
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
interface FetchProfilesErrorAction {
  payload: {
    errorMessage: string;
  };
  type: 'fetchProfilesError';
}
interface SetProfilesAction {
  payload: {
    profiles: Profile[];
  };
  type: 'setProfiles';
}
interface ToggleFilterAction {
  type: 'toggleIsFiltered';
}
interface ToggleTimerAction {
  type: 'toggleIsTimerRunning';
}

type Action =
  | AscendingAction
  | DescendingAction
  | FetchProfilesAction
  | FetchProfilesErrorAction
  | SetProfilesAction
  | ToggleFilterAction
  | ToggleTimerAction;

const initialState: Omit<State, 'dispatch'> = {
  byId: {},
  errorMessage: null,
  hasFetched: false,
  isFetching: false,
  isFiltered: false,
  isTimerRunning: true,
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

    case 'fetchProfiles':
      return {
        ...state,
        errorMessage: null,
        isFetching: true,
        isTimerRunning: false,
      };

    case 'fetchProfilesError':
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        isFetching: false,
        isTimerRunning: false,
      };

    case 'setProfiles':
      const byId: Record<number, Profile> = action.payload.profiles.reduce(
        (prev: Record<number, Profile>, curr) => {
          prev[curr.id] = curr;

          return prev;
        },
        {}
      );

      return {
        ...state,
        byId: {
          ...state.byId,
          ...byId,
        },
        errorMessage: null,
        hasFetched: true,
        isFetching: false,
        isTimerRunning: true,
        profiles: action.payload.profiles,
      };

    case 'toggleIsFiltered':
      const isFiltered = !state.isFiltered;

      return {
        ...state,
        errorMessage: null,
        isFiltered,
        isFetching: true,
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
