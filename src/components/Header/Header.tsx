import React, { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className='Header' data-testid='Header'>
    Header Component
  </div>
);

export default Header;
