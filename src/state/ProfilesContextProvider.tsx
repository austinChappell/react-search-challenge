import React, { Dispatch, FC, Reducer } from 'react';

type ProfileById = Record<number, Profile>;

interface State {
  byId: ProfileById;
  dispatch: Dispatch<ProfilesContextAction>;
  errorMessage: string | null;
  hasFetched: boolean;
  isFetching: boolean;
  isFiltered: boolean;
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

export type ProfilesContextAction =
  | AscendingAction
  | DescendingAction
  | FetchProfilesAction
  | FetchProfilesErrorAction
  | SetProfilesAction
  | ToggleFilterAction;

const initialState: Omit<State, 'dispatch'> = {
  byId: {},
  errorMessage: null,
  hasFetched: false,
  isFetching: false,
  isFiltered: false,
  profiles: [],
};

export const ProfileContext = React.createContext(initialState as State);

const profilesReducer: Reducer<State, ProfilesContextAction> = (state, action) => {
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
      const byId: ProfileById = action.payload.profiles.reduce(
        (prev: ProfileById, curr) => ({
          ...prev,
          [curr.id]: curr,
        }),
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
      };

    default:
      throw new Error();
  }
};

const ProfilesContextProvider: FC = ({ children }) => {
  const [state, dispatch] = React.useReducer<Reducer<State, ProfilesContextAction>>(
    profilesReducer,
    initialState as State
  );

  return (
    <ProfileContext.Provider value={{ ...state, dispatch }}>{children}</ProfileContext.Provider>
  );
};

export default ProfilesContextProvider;
