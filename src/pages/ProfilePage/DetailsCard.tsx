// External Dependencies
import styled from '@emotion/styled';
import { FC, useMemo } from 'react';

// Local Typings
interface Props {
  dateOfBirth: UserFullProfile['dateOfBirth'];
  firstName: UserFullProfile['firstName'];
  gender: UserFullProfile['gender'];
  lastName: UserFullProfile['lastName'];
  location: UserFullProfile['location'];
  registerDate: UserFullProfile['registerDate'];
}

// Local Variables
const Card = styled.div({
  border: '1px solid lightgray',
  borderRadius: 8,
  padding: 24,
});

const Title = styled.h2({
  fontSize: 28,
  margin: 0,
});

const CardContent = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 40,
});

const Subtitle = styled.h3({
  fontSize: 18,
  marginBottom: 8,
});

const Section = styled.section({
  fontSize: 14,
  margin: '12px 0',
});

const DetailSpan = styled.span({
  display: 'block',
  margin: '4px 0',
});

// Component Definition
const DetailsCard: FC<Props> = ({
  dateOfBirth,
  firstName,
  gender,
  lastName,
  location,
  registerDate,
}) => {
  const memberSinceDate = useMemo(() => new Date(registerDate).toLocaleDateString(), [
    registerDate,
  ]);
  const birthday = useMemo(() => new Date(dateOfBirth).toLocaleDateString(), [dateOfBirth]);

  return (
    <Card>
      <Title>
        {firstName} {lastName}
      </Title>
      <DetailSpan>{gender}</DetailSpan>

      <CardContent>
        <Section>
          <Subtitle>Address</Subtitle>

          <p>
            <DetailSpan>{location.street}</DetailSpan>
            <DetailSpan>
              {location.city}, {location.state}
            </DetailSpan>
            <DetailSpan>{location.country}</DetailSpan>
          </p>
        </Section>

        <Section>
          <Subtitle>About</Subtitle>
          <p>Member since {memberSinceDate}</p>
          <p>Birthday: {birthday}</p>{' '}
        </Section>
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
