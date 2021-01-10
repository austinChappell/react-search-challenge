import React, { useCallback, useContext } from 'react';

import { ProfileContext } from 'state/ProfilesContextProvider';
import MinimalButton from 'components/shared/MinimalButton';
import { getPublichPath } from 'utils/getPublicPath';

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
    </div>
  );
};

export default FilterButtons;
