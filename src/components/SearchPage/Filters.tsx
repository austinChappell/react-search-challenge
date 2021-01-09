import React from 'react';
import styled from '@emotion/styled';

import { ProfileContext } from '../ProfilesContextProvider';
import MinimalButton from '../MinimalButton';

const ButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});

class Filters extends React.Component {
  static contextType = ProfileContext;
  context!: React.ContextType<typeof ProfileContext>;

  handleSortAscending = () => {
    this.context.dispatch({ type: 'ascending' });
  };

  handleSortDescending = () => {
    this.context.dispatch({ type: 'descending' });
  };

  render() {
    return (
      <ButtonContainer>
        <MinimalButton disabled>
          <img src="filter.svg" width={22} alt="filter" />
        </MinimalButton>

        <MinimalButton onClick={this.handleSortAscending}>
          <img src="./ascending.svg" width={22} alt="Sort ascending" />
        </MinimalButton>

        <MinimalButton onClick={this.handleSortDescending}>
          <img src="./descending.svg" width={22} alt="Sort descending" />
        </MinimalButton>
      </ButtonContainer>
    );
  }
}

export default Filters;
