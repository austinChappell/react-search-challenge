import React, { Dispatch, FC, Reducer } from 'react';

type ProfileById = Record<string, UserFullProfile>;

interface State {
  byId: ProfileById;
  dispatch: Dispatch<ProfilesContextAction>;
  errorMessage: string | null;
  hasFetched: boolean;
  isFetching: boolean;
  isFetchingFullProfile: boolean;
  isFiltered: boolean;
  isTimerRunning: boolean;
  profiles: UserListUser[];
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
interface SetFullProfileAction {
  payload: {
    profile: UserFullProfile;
  };
  type: 'setFullProfile';
}
interface SetProfilesAction {
  payload: {
    profiles: UserListUser[];
  };
  type: 'setProfiles';
}
interface ToggleFilterAction {
  type: 'toggleIsFiltered';
}
interface ToggleIsFetchingFullProfileAction {
  type: 'toggleIsFetchingFullProfile';
}
interface ToggleIsTimerRunningAction {
  type: 'toggleIsTimerRunning';
}

export type ProfilesContextAction =
  | AscendingAction
  | DescendingAction
  | FetchProfilesAction
  | FetchProfilesErrorAction
  | SetFullProfileAction
  | SetProfilesAction
  | ToggleFilterAction
  | ToggleIsFetchingFullProfileAction
  | ToggleIsTimerRunningAction;

const initialState: Omit<State, 'dispatch'> = {
  byId: {},
  errorMessage: null,
  hasFetched: false,
  isFetching: false,
  isFetchingFullProfile: false,
  isFiltered: false,
  isTimerRunning: true,
  profiles: [],
};

export const ProfileContext = React.createContext(initialState as State);

const profilesReducer: Reducer<State, ProfilesContextAction> = (state, action) => {
  let profiles;

  switch (action.type) {
    case 'ascending':
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.email > profileB.email ? 1 : -1));
      return {
        ...state,
        profiles,
      };

    case 'descending':
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.email < profileB.email ? 1 : -1));
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

    case 'setFullProfile':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.profile.id]: { ...action.payload.profile },
        },
        isFetchingFullProfile: false,
      };

    case 'setProfiles':
      return {
        ...state,
        errorMessage: null,
        hasFetched: true,
        isFetching: false,
        isTimerRunning: true,
        profiles: action.payload.profiles,
      };

    case 'toggleIsFetchingFullProfile':
      return {
        ...state,
        isFetchingFullProfile: !state.isFetchingFullProfile,
      };

    case 'toggleIsFiltered':
      const isFiltered = !state.isFiltered;

      return {
        ...state,
        errorMessage: null,
        isFiltered,
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
  const [state, dispatch] = React.useReducer<Reducer<State, ProfilesContextAction>>(
    profilesReducer,
    initialState as State
  );

  return (
    <ProfileContext.Provider value={{ ...state, dispatch }}>{children}</ProfileContext.Provider>
  );
};

export default ProfilesContextProvider;
