import React, { useContext } from 'react';
import Swicth from 'react-switch';
import { ThemeContext } from 'styled-components'
import { shade } from 'polished';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Hello World

      <h2> {title} </h2>

      <Swicth 
        onChange={toggleTheme}
        checked={title === 'DARK'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.20, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;