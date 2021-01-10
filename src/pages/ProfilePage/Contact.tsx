import styled from '@emotion/styled';
import MinimalButton from 'components/shared/MinimalButton';
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
      <MinimalButton>
        <img alt="message" src={getPublichPath('/email.svg')} width={22} />
      </MinimalButton>

      <MinimalButton>
        <img alt="call" src={getPublichPath('/phone.svg')} width={22} />
      </MinimalButton>
    </Container>
  );
};

export default Contact;
