import React, { useCallback, useContext } from 'react';
import styled from '@emotion/styled';

import { ProfileContext } from '../../state/ProfilesContextProvider';
import MinimalButton from '../../components/shared/MinimalButton';
import RefetchTimer from './RefetchTimer';

const Flex = styled.div({
  alignItems: 'baseline',
  display: 'flex',
  justifyContent: 'space-between',
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
    <Flex>
      <RefetchTimer />

      <div>
        <MinimalButton disabled>
          <img src="filter.svg" width={22} alt="filter" />
        </MinimalButton>

        <MinimalButton onClick={handleSortAscending}>
          <img src="./ascending.svg" width={22} alt="Sort ascending" />
        </MinimalButton>

        <MinimalButton onClick={handleSortDescending}>
          <img src="./descending.svg" width={22} alt="Sort descending" />
        </MinimalButton>
      </div>
    </Flex>
  );
};

export default Filters;
