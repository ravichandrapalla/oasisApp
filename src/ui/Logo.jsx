/* eslint-disable no-unused-vars */
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="./src/data/img/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
