// External Dependencies
import styled from '@emotion/styled';
import { FC, useCallback, useContext } from 'react';

// Internal Dependencies
import { getProfiles } from 'api/profiles';
import ErrorMessage from 'components/shared/ErrorMessage';
import MinimalButton from 'components/shared/MinimalButton';
import RefetchTimer from 'components/shared/RefetchTimer';
import { ProfileContext } from 'state/ProfilesContextProvider';

// Local Variables
const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
});

// Component Definition
const RefetchProfilesButton: FC = () => {
  const { dispatch, errorMessage, isFetching, isTimerRunning } = useContext(ProfileContext);

  const handleRefetchProfiles = useCallback(() => {
    getProfiles(dispatch);
  }, [dispatch]);

  const handleToggleIsTimerRunning = useCallback(() => {
    dispatch({
      type: 'toggleIsTimerRunning',
    });
  }, [dispatch]);

  if (errorMessage) {
    return (
      <Wrapper>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <MinimalButton onClick={handleRefetchProfiles}>Retry</MinimalButton>
      </Wrapper>
    );
  }

  return (
    <RefetchTimer
      isFetching={isFetching}
      isTimerRunning={isTimerRunning}
      onTimerEnd={handleRefetchProfiles}
      onToggleIsTimerRunning={handleToggleIsTimerRunning}
    />
  );
};

export default RefetchProfilesButton;
