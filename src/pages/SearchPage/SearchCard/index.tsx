import styled from '@emotion/styled';
import { paths } from 'constants/paths';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

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

const SearchCard: FC<UserListUser> = ({ email, firstName, id, picture, title }) => (
  <Link to={`/${paths.profiles}/${id}`}>
    <Card>
      <AvatarContainer>
        <Avatar>
          <img src={picture} alt="potential date" width="100%" />

          <UserInfo firstName={firstName} email={email} title={title} />
        </Avatar>
      </AvatarContainer>
    </Card>
  </Link>
);

export default SearchCard;
