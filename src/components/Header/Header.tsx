import React, { FC } from 'react';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { HeaderContainer, StyledFontAwesomeIcon } from './Header.styles';
import { Container } from '../../styles';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <HeaderContainer data-testid='Header'>
    <Container>
      <StyledFontAwesomeIcon icon={faCalculator} /> Integer to Roman Calculator
    </Container>
  </HeaderContainer>
);

export default Header;
