// External Dependencies
import styled from '@emotion/styled';
import { FC } from 'react';
import { getPublichPath } from 'utils/getPublicPath';

// Internal Dependencies
import LoadingSpinner from 'components/shared/LoadingSpinner';

// Local Variables
const Container = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  justifyContent: 'center',
  minHeight: '50vh',
});

// Component Definition
const LoadingScreen: FC = () => (
  <Container>
    <img alt="logo" src={getPublichPath('/logo.svg')} width={100} />

    <LoadingSpinner size={48} />
  </Container>
);

export default LoadingScreen;
