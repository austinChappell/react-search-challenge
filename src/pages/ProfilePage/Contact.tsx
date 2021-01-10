// External Dependencies
import styled from '@emotion/styled';
import { FC } from 'react';

// Internal Dependencies
import { getPublichPath } from 'utils/getPublicPath';

// Local Typings
interface Props {
  email: UserFullProfile['email'];
  phone: UserFullProfile['phone'];
}

// Local Variables
const Container = styled.section({
  display: 'flex',
  gap: 24,
  justifyContent: 'center',
});

// Component Definition
const Contact: FC<Props> = ({ email, phone }) => (
  <Container>
    <a href={`mailto:${email}`}>
      <img alt="message" src={getPublichPath('/email.svg')} width={22} />
    </a>

    <a href={`tel:${phone}`}>
      <img alt="call" src={getPublichPath('/phone.svg')} width={22} />
    </a>
  </Container>
);

export default Contact;
