import styled from '@emotion/styled';
import React, { FC } from 'react';
import Handle from './Handle';
import LocationAndAge from './LocationAndAge';

export interface UserInfoProps {
  dateOfBirth?: UserFullProfile['dateOfBirth'];
  firstName: UserListUser['firstName'];
  location?: UserFullProfile['location'];
}

const Wrapper = styled.div({
  background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0,0,0,0.5))',
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

const UserInfo: FC<UserInfoProps> = ({ dateOfBirth, firstName, location }) => (
  <Wrapper>
    <Handle>{firstName}</Handle>

    <FlexContainer>
      <LocationAndAge dateOfBirth={dateOfBirth} location={location} />
    </FlexContainer>
  </Wrapper>
);

export default UserInfo;
