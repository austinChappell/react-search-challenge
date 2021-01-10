import styled from '@emotion/styled';
import MinimalButton from 'components/shared/MinimalButton';
import { FC, useCallback, useContext } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';
import ErrorMessage from 'components/shared/ErrorMessage';
import RefetchTimer from 'components/shared/RefetchTimer';
import { getProfiles } from 'api/profiles';

const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
});

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
