import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import LIGHT from './styles/themes/light';
import DARK from './styles/themes/dark';

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', LIGHT);

  const toggleTheme = () => {
    setTheme(theme.title === 'LIGHT' ? DARK : LIGHT);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
