import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, Home } from 'components/pages';
import { light, dark } from 'themes';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${(props) => props.theme.bodyFontColor};
    font-family: 'Kaushan Script'
  }
`;

const App = () => {
  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((theme) => (theme.id === 'light' ? dark : light));
        }
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
