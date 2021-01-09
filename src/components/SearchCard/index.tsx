import styled from '@emotion/styled';
import React, { FC } from 'react';
import UserInfo from './UserInfo';

export const Card = styled.div({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});

export const AvatarContainer = styled.div({
  border: '1px solid lightgray',
  borderRadius: 8,
  boxShadow: '0 3px 6px lightgray, 0 3px 6px',
  overflow: 'hidden',
});

export const Avatar = styled.div({
  position: 'relative',
  height: '200px',
  width: '200px',
});

const SearchCard: FC<Profile> = ({
  age = 99,
  handle = '',
  location = '',
  photoCount = 0,
  photoUrl = '',
}) => (
  <Card>
    <AvatarContainer>
      <Avatar>
        <img src={photoUrl} alt="potential date" />

        <UserInfo age={age} handle={handle} location={location} photoCount={photoCount} />
      </Avatar>
    </AvatarContainer>
  </Card>
);

export default SearchCard;
