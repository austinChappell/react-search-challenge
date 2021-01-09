import styled from '@emotion/styled';
import React, { FC } from 'react';
import Handle from './Handle';
import LocationAndAge from './LocationAndAge';
import PhotoCount from './PhotoCount';

interface Props {
  age: Profile['age'];
  handle: Profile['handle'];
  location: Profile['location'];
  photoCount: Profile['photoCount'];
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

const UserInfo: FC<Props> = ({ age, handle, location, photoCount }) => (
  <Wrapper>
    <Handle>{handle}</Handle>

    <FlexContainer>
      <LocationAndAge age={age} location={location} />

      <PhotoCount photoCount={photoCount} />
    </FlexContainer>
  </Wrapper>
);

export default UserInfo;
