import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme, teamsDarkTheme } from '@fluentui/react-components';
import App from './App';
import "./index.css"

ReactDOM.render(
  <FluentProvider theme={teamsLightTheme}>
    <App />
  </FluentProvider>,
  document.getElementById('root'),
);