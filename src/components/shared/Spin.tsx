// External Dependencies
import styled from '@emotion/styled';

// Component Definition
const Spin = styled.span({
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },

  '& > *': {
    animation: 'spin 0.7s linear infinite',
  },
});

export default Spin;
