import MinimalButton from 'components/shared/MinimalButton';
import { FC, useContext } from 'react';
import { ProfileContext } from 'state/ProfilesContextProvider';

const RefetchTimer: FC = () => {
  const { secondsUntilRefetch } = useContext(ProfileContext);

  return (
    <div>
      Refreshing in {secondsUntilRefetch}...
      <MinimalButton>Pause</MinimalButton>
    </div>
  );
};

export default RefetchTimer;
