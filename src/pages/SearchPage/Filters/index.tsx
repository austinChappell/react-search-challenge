import React from 'react';
import styled from '@emotion/styled';

import RefetchTimer from './RefetchTimer';
import FilterButtons from './FilterButtons';

const Flex = styled.div({
  alignItems: 'baseline',
  display: 'flex',
  justifyContent: 'space-between',
});

const Filters = () => (
  <Flex>
    <RefetchTimer />

    <FilterButtons />
  </Flex>
);

export default Filters;
