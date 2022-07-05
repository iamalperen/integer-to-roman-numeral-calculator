import React, { FC, useState } from 'react';
import { CALCULATOR_MAX_INPUT, CALCULATOR_MIN_INPUT } from '../../constants';
import { convertToRomans } from '../../utils/convertIntToRomans';
import {
  CalculatorContainer,
  CalculatorDesc,
  CalculatorImg,
  CalculatorImgContainer,
  CalculatorInputContainer,
  CalculatorNumberInput,
  CalculatorNumberSubmitButton,
  CalculatorOutputContainer,
  CalculatorTitle,
} from './Calculator.styles';
import { Container } from '../../styles';
import calc from '../../assets/calc.png';

interface CalculatorProps {}

const Calculator: FC<CalculatorProps> = () => {
  const [intValue, setIntValue] = useState(1);
  const [romanValue, setRomanValue] = useState('I');

  const handleInputChange = (event: { target: { value: any } }) => {
    const value = Math.max(
      CALCULATOR_MIN_INPUT,
      Math.min(CALCULATOR_MAX_INPUT, Number(event.target.value))
    );
    setIntValue(value);
  };

  const calculateRomanNumerals = () => {
    const romansValue = convertToRomans(intValue);
    setRomanValue(romansValue);
  };

  return (
    <CalculatorContainer data-testid='Calculator'>
      <Container>
        <CalculatorTitle> Roman Numeral Calculator </CalculatorTitle>
        <CalculatorDesc>
          Please enter a number between 1 and 1000 inclusive
        </CalculatorDesc>
        <CalculatorInputContainer>
          <CalculatorNumberInput
            type='number'
            value={intValue}
            onChange={handleInputChange}
          />
          <CalculatorNumberSubmitButton onClick={calculateRomanNumerals}>
            Calculate
          </CalculatorNumberSubmitButton>
        </CalculatorInputContainer>
        <CalculatorOutputContainer>{romanValue}</CalculatorOutputContainer>
        <CalculatorImgContainer>
          <CalculatorImg src={calc} />
        </CalculatorImgContainer>
      </Container>
    </CalculatorContainer>
  );
};

export default Calculator;
