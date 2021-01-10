import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getPublichPath } from 'utils/getPublicPath';

const Header = styled.header({
  borderBottom: `1px solid #efefef`,
  padding: 16,
});

const Main = styled.main({
  margin: 24,
});

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
