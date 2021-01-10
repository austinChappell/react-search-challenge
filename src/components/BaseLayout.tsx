// External Dependencies
import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// Internal Dependencies
import { getPublichPath } from 'utils/getPublicPath';

// Local Variables
const Header = styled.header({
  borderBottom: `1px solid #efefef`,
  padding: 16,
});

const Main = styled.main({
  margin: 24,
});

// Component Definition
const BaseLayout: FC = ({ children }) => (
  <>
    <Header>
      <Link to="/">
        <img src={getPublichPath('/logo.svg')} alt="match" width="110" />
      </Link>
    </Header>

    <Main>{children}</Main>
  </>
);

export default BaseLayout;
