import React, { useCallback, useContext } from 'react';
import styled from '@emotion/styled';

import { ProfileContext } from '../../state/ProfilesContextProvider';
import MinimalButton from '../../components/shared/MinimalButton';

const ButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});

const Filters = () => {
  const { dispatch } = useContext(ProfileContext);

  const handleSortAscending = useCallback(() => {
    dispatch({ type: 'ascending' });
  }, [dispatch]);

  const handleSortDescending = useCallback(() => {
    dispatch({ type: 'descending' });
  }, [dispatch]);

  return (
    <ButtonContainer>
      <MinimalButton disabled>
        <img src="filter.svg" width={22} alt="filter" />
      </MinimalButton>

      <MinimalButton onClick={handleSortAscending}>
        <img src="./ascending.svg" width={22} alt="Sort ascending" />
      </MinimalButton>

      <MinimalButton onClick={handleSortDescending}>
        <img src="./descending.svg" width={22} alt="Sort descending" />
      </MinimalButton>
    </ButtonContainer>
  );
};

export default Filters;
