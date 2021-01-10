// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Local Dependencies
import FilterButtons from './FilterButtons';
import RefetchProfilesButton from './RefetchProfilesButton';

// Local Variables
const Flex = styled.div({
  alignItems: 'baseline',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

// Component Definition
const Filters = () => (
  <Flex>
    <RefetchProfilesButton />

    <FilterButtons />
  </Flex>
);

export default Filters;
