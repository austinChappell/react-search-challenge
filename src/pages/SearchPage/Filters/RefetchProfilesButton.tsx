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
  const { dispatch, errorMessage, isFetching } = useContext(ProfileContext);

  const handleRefetchProfiles = useCallback(() => {
    getProfiles(dispatch);
  }, [dispatch]);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return (
      <Wrapper>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <MinimalButton onClick={handleRefetchProfiles}>Retry</MinimalButton>
      </Wrapper>
    );
  }

  return <RefetchTimer isFetching={isFetching} onTimerEnd={handleRefetchProfiles} />;
};

export default RefetchProfilesButton;
