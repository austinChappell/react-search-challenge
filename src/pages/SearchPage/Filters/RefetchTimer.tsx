import styled from '@emotion/styled';
import MinimalButton from 'components/shared/MinimalButton';
import { useRepeatedTimer } from 'hooks/useRepeatedTimer';
import { FC, useCallback, useContext, useEffect, useState } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';

const ErrorMessage = styled.span({
  color: 'red',
});
const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
});

const RefetchTimer: FC = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const { dispatch, errorMessage, isFetching } = useContext(ProfileContext);

  const handleRefetchProfiles = useCallback(() => {
    dispatch({
      type: 'fetchProfiles',
    });
  }, [dispatch]);

  const { reset, seconds } = useRepeatedTimer(10, isTimerRunning, {
    onTimerEnd: handleRefetchProfiles,
  });

  const handleClick = useCallback(() => {
    setIsTimerRunning((isRunning) => !isRunning);
  }, [setIsTimerRunning]);

  useEffect(() => {
    if (isFetching) {
      reset();
    }
  }, [isFetching, reset]);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      {errorMessage ? (
        <>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <MinimalButton onClick={handleRefetchProfiles}>Retry</MinimalButton>
        </>
      ) : (
        <>
          <p>Refreshing in {seconds}...</p>
          <MinimalButton onClick={handleClick}>{isTimerRunning ? 'Pause' : 'Resume'}</MinimalButton>
        </>
      )}
    </Wrapper>
  );
};

export default RefetchTimer;
