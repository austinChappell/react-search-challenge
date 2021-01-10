// External Dependencies
import styled from '@emotion/styled';
import { FC, useCallback } from 'react';

// Internal Dependencies
import MinimalButton from 'components/shared/MinimalButton';
import { getPublichPath } from 'utils/getPublicPath';

// Local Dependencies
import LoadingSpinner from './LoadingSpinner';
import InfiniteProgressBar from './ProgressBar';

// Local Typings
interface Props {
  isFetching: boolean;
  isTimerRunning: boolean;
  onTimerEnd: () => void;
  onToggleIsTimerRunning: () => void;
}

// Local Variables
const refetchInterval = 10;

const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
  gap: 8,
  padding: 8,
});

// Component Definition
const RefetchTimer: FC<Props> = ({
  isFetching,
  isTimerRunning,
  onTimerEnd,
  onToggleIsTimerRunning,
}) => {
  const handleRepeat = useCallback(() => {
    // make sure the API is not called repeatedly when the user is away
    if (document.hasFocus()) {
      onTimerEnd();
    }
  }, [onTimerEnd]);

  return (
    <Wrapper>
      <InfiniteProgressBar
        direction="reverse"
        intervalInSeconds={refetchInterval}
        isPaused={!isTimerRunning || isFetching}
        onRepeat={handleRepeat}
      />

      <MinimalButton onClick={onToggleIsTimerRunning}>
        <img
          alt={isTimerRunning ? 'pause' : 'resume'}
          src={isTimerRunning ? getPublichPath('/pause.svg') : getPublichPath('/play.svg')}
          width={22}
        />
      </MinimalButton>

      <MinimalButton disabled={isFetching} onClick={onTimerEnd}>
        {isFetching ? (
          <LoadingSpinner />
        ) : (
          <img alt="reload" src={getPublichPath('/reload.svg')} width={22} />
        )}
      </MinimalButton>
    </Wrapper>
  );
};

export default RefetchTimer;
