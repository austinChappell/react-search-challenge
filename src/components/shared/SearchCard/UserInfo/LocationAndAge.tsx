// External Dependencies
import styled from '@emotion/styled';
import { FC, useMemo } from 'react';

// Internal Dependencies
import { getAgeFromDateOfBirth } from 'utils/getAgeFromDateOfBirth';

// Local Typings
interface Props {
  dateOfBirth?: UserFullProfile['dateOfBirth'];
  location?: UserFullProfile['location'];
}

// Local Variables
const StyledSpan = styled.span({
  marginTop: 32,
});

// Component Definition
const LocationAndAge: FC<Props> = ({ dateOfBirth, location }) => {
  const age = useMemo(() => getAgeFromDateOfBirth(dateOfBirth), [dateOfBirth]);

  if (!dateOfBirth && !location) {
    return null;
  }

  const ageText = age ? `${age} • ` : '';

  return <StyledSpan>{location?.city ? `${ageText}${location.city}` : age}</StyledSpan>;
};

export default LocationAndAge;
