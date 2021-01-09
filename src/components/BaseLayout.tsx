import React, { FC } from 'react';
import styled from '@emotion/styled';

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
      <img src="./logo.svg" alt="match" width="110" />
    </Header>

    <Main>{children}</Main>
  </>
);

export default BaseLayout;
