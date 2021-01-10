// External Dependencies
import styled from '@emotion/styled';
import { FC, useCallback, useContext } from 'react';

// Internal Dependencies
import { getProfiles } from 'api/profiles';
import MinimalButton from 'components/shared/MinimalButton';
import { ProfileContext } from 'state/ProfilesContextProvider';
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
          src={isTimerRunning ? getPublichPath('/pause.svg') : getPublichPath('/play.svg')}
          width={22}
        />
      </MinimalButton>

      <MinimalButton disabled={isFetching} onClick={handleClickRefetch}>
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
