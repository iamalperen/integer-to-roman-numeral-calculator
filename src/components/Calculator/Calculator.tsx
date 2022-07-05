import React, { FC } from 'react';

interface CalculatorProps {}

const Calculator: FC<CalculatorProps> = () => (
  <div className='Calculator' data-testid='Calculator'>
    Calculator Component
  </div>
);

export default Calculator;
