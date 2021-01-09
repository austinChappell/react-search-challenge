import styled from '@emotion/styled';

const StyledHeader = styled.header({
  borderBottom: `1px solid #efefef`,
  padding: 16,
});

const Header = () => {
  return (
    <StyledHeader>
      <img src="./logo.svg" alt="match" width="110" />
    </StyledHeader>
  );
};

export default Header;
