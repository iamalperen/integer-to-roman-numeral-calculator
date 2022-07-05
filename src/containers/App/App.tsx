import React, { FC } from 'react';
import { RomanNumeralCalculatorApp } from './App.styles';
import { Calculator, Header } from '../../components';

interface AppProps {}

const App: FC<AppProps> = () => (
  <RomanNumeralCalculatorApp data-testid='App'>
    <Header />
    <Calculator />
  </RomanNumeralCalculatorApp>
);

export default App;
