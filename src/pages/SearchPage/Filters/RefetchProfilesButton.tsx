// External Dependencies
import styled from '@emotion/styled';
import { FC, useCallback } from 'react';

// Internal Dependencies
import { getProfiles } from 'api/profiles';
import ErrorMessage from 'components/shared/ErrorMessage';
import MinimalButton from 'components/shared/MinimalButton';
import RefetchTimer from 'components/shared/RefetchTimer';
import { useProfilesDispatch, useProfilesState } from 'state/hooks';

// Local Variables
const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
});

// Component Definition
const RefetchProfilesButton: FC = () => {
  const { errorMessage, isFetching, isTimerRunning } = useProfilesState();
  const dispatch = useProfilesDispatch();

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
