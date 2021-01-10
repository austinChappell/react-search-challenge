import styled from '@emotion/styled';
import { FC, useMemo } from 'react';

interface Props {
  dateOfBirth?: UserFullProfile['dateOfBirth'];
  location?: UserFullProfile['location'];
}

const StyledSpan = styled.span({
  marginTop: 32,
});

const getAge = (dateOfBirth?: string) => {
  if (!dateOfBirth) {
    return null;
  }

  const dob = new Date(dateOfBirth);

  const ageDiffInMilliseconds = Date.now() - dob.getTime();
  const ageDate = new Date(ageDiffInMilliseconds);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const LocationAndAge: FC<Props> = ({ dateOfBirth, location }) => {
  const age = useMemo(() => getAge(dateOfBirth), [dateOfBirth]);

  if (!dateOfBirth && !location) {
    return null;
  }

  return <StyledSpan>{location?.city ? `${age} • ${location.city}` : age}</StyledSpan>;
};

export default LocationAndAge;
