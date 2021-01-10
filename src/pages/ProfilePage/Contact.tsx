import styled from '@emotion/styled';
import { FC } from 'react';
import { getPublichPath } from 'utils/getPublicPath';

interface Props {
  email: UserFullProfile['email'];
  phone: UserFullProfile['phone'];
}

const Container = styled.section({
  display: 'flex',
  gap: 24,
  justifyContent: 'center',
});

const Contact: FC<Props> = ({ email, phone }) => {
  return (
    <Container>
      <a href={`mailto:${email}`}>
        <img alt="message" src={getPublichPath('/email.svg')} width={22} />
      </a>

      <a href={`tel:${phone}`}>
        <img alt="call" src={getPublichPath('/phone.svg')} width={22} />
      </a>
    </Container>
  );
};

export default Contact;
