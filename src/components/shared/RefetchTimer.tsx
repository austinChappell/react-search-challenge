import styled from '@emotion/styled';
import MinimalButton from 'components/shared/MinimalButton';
import { useRepeatedTimer } from 'hooks/useRepeatedTimer';
import { FC, useCallback, useEffect, useState } from 'react';

// Local Typings
interface Props {
  isFetching: boolean;
  onTimerEnd: () => void;
}

const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
});

const RefetchTimer: FC<Props> = ({ isFetching, onTimerEnd }) => {
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const { reset, seconds } = useRepeatedTimer(10, isTimerRunning, {
    onTimerEnd,
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
      <p>Refreshing in {seconds}...</p>
      <MinimalButton onClick={handleClick}>{isTimerRunning ? 'Pause' : 'Resume'}</MinimalButton>
    </Wrapper>
  );
};

export default RefetchTimer;
