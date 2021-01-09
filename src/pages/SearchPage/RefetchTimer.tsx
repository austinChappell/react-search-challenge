import MinimalButton from 'components/shared/MinimalButton';
import { FC, useCallback, useContext } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';

const RefetchTimer: FC = () => {
  const { dispatch, isFetching, isTimerRunning, secondsUntilRefetch } = useContext(ProfileContext);

  const handleClick = useCallback(() => {
    dispatch({
      type: 'toggleIsTimerRunning',
    });
  }, [dispatch]);

  if (isFetching) {
    return <p>Refreshing...</p>;
  }

  return (
    <div>
      Refreshing in {secondsUntilRefetch}...
      <MinimalButton onClick={handleClick}>{isTimerRunning ? 'Pause' : 'Resume'}</MinimalButton>
    </div>
  );
};

export default RefetchTimer;
