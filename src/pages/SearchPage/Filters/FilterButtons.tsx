// External Dependencies
import styled from '@emotion/styled';
import React, { FC, useCallback } from 'react';

// Internal Dependencies
import MinimalButton from 'components/shared/MinimalButton';
import { getPublichPath } from 'utils/getPublicPath';
import { useProfilesDispatch, useProfilesState } from 'state/hooks';

// Local Variables
const Container = styled.div({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-end',
});

// Component Definition
const FilterButtons: FC = () => {
  const { isFiltered } = useProfilesState();
  const dispatch = useProfilesDispatch();

  const handleSortAscending = useCallback(() => {
    dispatch({ type: 'ascending' });
  }, [dispatch]);

  const handleSortDescending = useCallback(() => {
    dispatch({ type: 'descending' });
  }, [dispatch]);

  const handleToggleFilter = useCallback(() => {
    dispatch({ type: 'toggleIsFiltered' });
  }, [dispatch]);

  return (
    <Container>
      <MinimalButton onClick={handleToggleFilter}>
        <img
          src={getPublichPath(isFiltered ? '/filter.svg' : '/filter-empty.svg')}
          width={22}
          alt="filter"
        />
      </MinimalButton>

      <MinimalButton onClick={handleSortAscending}>
        <img src={getPublichPath('./ascending.svg')} width={22} alt="Sort ascending" />
      </MinimalButton>

      <MinimalButton onClick={handleSortDescending}>
        <img src={getPublichPath('./descending.svg')} width={22} alt="Sort descending" />
      </MinimalButton>
    </Container>
  );
};

export default FilterButtons;
