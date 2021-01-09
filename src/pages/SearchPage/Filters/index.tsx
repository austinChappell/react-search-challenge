import React from 'react';
import styled from '@emotion/styled';

import FilterButtons from './FilterButtons';
import RefetchProfilesButton from './RefetchProfilesButton';

const Flex = styled.div({
  alignItems: 'baseline',
  display: 'flex',
  justifyContent: 'space-between',
});

const Filters = () => (
  <Flex>
    <RefetchProfilesButton />

    <FilterButtons />
  </Flex>
);

export default Filters;
