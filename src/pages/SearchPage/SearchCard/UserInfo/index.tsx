import styled from '@emotion/styled';
import React, { FC } from 'react';
import Handle from './Handle';

interface Props {
  email: UserListUser['email'];
  firstName: UserListUser['firstName'];
  title: UserListUser['title'];
}

const Wrapper = styled.div({
  bottom: '0',
  color: 'white',
  padding: 8,
  position: 'absolute',
  width: '100%',
});

const FlexContainer = styled.div({
  alignItems: 'baseline',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 4,
});

const EmailSpan = styled.span({
  maxWidth: '70%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const Title = styled.span({
  marginRight: 4,
});

const UserInfo: FC<Props> = ({ email, firstName, title }) => (
  <Wrapper>
    <Handle>{firstName}</Handle>

    <FlexContainer>
      <EmailSpan>{email}</EmailSpan>

      <Title>{title}</Title>
    </FlexContainer>
  </Wrapper>
);

export default UserInfo;
