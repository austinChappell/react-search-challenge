import styled from '@emotion/styled';
import MinimalButton from 'components/shared/MinimalButton';
import { FC, useCallback, useContext } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';

const ErrorMessage = styled.span({
  color: 'red',
});
const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
});

const RefetchTimer: FC = () => {
  const { dispatch, errorMessage, isFetching, isTimerRunning, secondsUntilRefetch } = useContext(
    ProfileContext
  );

  const handleRetry = useCallback(() => {
    dispatch({
      type: 'fetchProfiles',
    });
  }, [dispatch]);

  const handleClick = useCallback(() => {
    dispatch({
      type: 'toggleIsTimerRunning',
    });
  }, [dispatch]);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      {errorMessage ? (
        <>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <MinimalButton onClick={handleRetry}>Retry</MinimalButton>
        </>
      ) : (
        <>
          <p>Refreshing in {secondsUntilRefetch}...</p>
          <MinimalButton onClick={handleClick}>{isTimerRunning ? 'Pause' : 'Resume'}</MinimalButton>
        </>
      )}
    </Wrapper>
  );
};

export default RefetchTimer;
