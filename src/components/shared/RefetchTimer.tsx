import styled from '@emotion/styled';
import { getProfiles } from 'api/profiles';
import MinimalButton from 'components/shared/MinimalButton';
import { FC, useCallback, useContext } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';
import LoadingSpinner from './LoadingSpinner';
import InfiniteProgressBar from './ProgressBar';

// Local Typings
interface Props {
  isFetching: boolean;
  isTimerRunning: boolean;
  onTimerEnd: () => void;
  onToggleIsTimerRunning: () => void;
}

const refetchInterval = 10;
const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
  gap: 8,
  padding: 8,
});

const RefetchTimer: FC<Props> = ({
  isFetching,
  isTimerRunning,
  onTimerEnd,
  onToggleIsTimerRunning,
}) => {
  const { dispatch } = useContext(ProfileContext);

  const handleClick = useCallback(() => {
    onToggleIsTimerRunning();
  }, [onToggleIsTimerRunning]);

  const handleClickRefetch = useCallback(() => {
    handleClick();
    getProfiles(dispatch);
    handleClick();
  }, [dispatch, handleClick]);

  return (
    <Wrapper>
      <InfiniteProgressBar
        direction="reverse"
        intervalInSeconds={refetchInterval}
        isPaused={!isTimerRunning || isFetching}
        onRepeat={onTimerEnd}
      />

      <MinimalButton onClick={handleClick}>
        <img
          alt={isTimerRunning ? 'pause' : 'resume'}
          src={isTimerRunning ? './pause.svg' : './play.svg'}
          width={22}
        />
      </MinimalButton>

      <MinimalButton disabled={isFetching} onClick={handleClickRefetch}>
        {isFetching ? <LoadingSpinner /> : <img alt="reload" src="./reload.svg" width={22} />}
      </MinimalButton>
    </Wrapper>
  );
};

export default RefetchTimer;
