// External Dependencies
import React, { FC, useCallback, useContext } from 'react';

// Internal Dependencies
import MinimalButton from 'components/shared/MinimalButton';
import { ProfileContext } from 'state/ProfilesContextProvider';
import { getPublichPath } from 'utils/getPublicPath';

// Component Definition
const FilterButtons: FC = () => {
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
