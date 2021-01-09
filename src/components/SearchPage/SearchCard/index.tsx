import styled from '@emotion/styled';
import { paths } from 'constants/paths';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

export const Card = styled.div({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});

export const AvatarContainer = styled.div({
  border: '1px solid lightgray',
  borderRadius: 8,
  boxShadow: '0 3px 6px lightgray, 0 3px 6px lightgray',
  overflow: 'hidden',
});

export const Avatar = styled.div({
  height: '200px',
  position: 'relative',
  width: '200px',
});

const SearchCard: FC<Profile> = ({
  age = 99,
  handle = '',
  id,
  location = '',
  photoCount = 0,
  photoUrl = '',
}) => (
  <Link to={`/${paths.profiles}/${id}`}>
    <Card>
      <AvatarContainer>
        <Avatar>
          <img src={photoUrl} alt="potential date" />

          <UserInfo age={age} handle={handle} location={location} photoCount={photoCount} />
        </Avatar>
      </AvatarContainer>
    </Card>
  </Link>
);

export default SearchCard;
