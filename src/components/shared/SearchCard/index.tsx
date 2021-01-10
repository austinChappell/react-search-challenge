import styled from '@emotion/styled';
import React, { FC } from 'react';
import UserInfo, { UserInfoProps } from './UserInfo';

const Card = styled.div({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});

const AvatarContainer = styled.div({
  border: '1px solid lightgray',
  borderRadius: 8,
  boxShadow: '0 3px 6px lightgray, 0 3px 6px lightgray',
  overflow: 'hidden',
});

const Avatar = styled.div({
  height: '200px',
  position: 'relative',
  width: '200px',
});

interface Props extends UserInfoProps {
  picture: UserListUser['picture'];
}

const SearchCard: FC<Props> = ({ dateOfBirth, firstName, location, picture }) => (
  <Card>
    <AvatarContainer>
      <Avatar>
        <img src={picture} alt="potential date" width="100%" />

        <UserInfo dateOfBirth={dateOfBirth} firstName={firstName} location={location} />
      </Avatar>
    </AvatarContainer>
  </Card>
);

export default SearchCard;
