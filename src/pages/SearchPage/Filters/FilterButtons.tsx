import React, { useCallback, useContext } from 'react';

import { ProfileContext } from 'state/ProfilesContextProvider';
import MinimalButton from 'components/shared/MinimalButton';

const FilterButtons = () => {
  const { dispatch, isFiltered } = useContext(ProfileContext);

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
    <div>
      <MinimalButton onClick={handleToggleFilter}>
        <img src={isFiltered ? 'filter.svg' : 'filter-empty.svg'} width={22} alt="filter" />
      </MinimalButton>

      <MinimalButton onClick={handleSortAscending}>
        <img src="./ascending.svg" width={22} alt="Sort ascending" />
      </MinimalButton>

      <MinimalButton onClick={handleSortDescending}>
        <img src="./descending.svg" width={22} alt="Sort descending" />
      </MinimalButton>
    </div>
  );
};

export default FilterButtons;
