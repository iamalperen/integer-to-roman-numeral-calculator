import styled from 'styled-components';
import Image from 'next/image';
import { Container } from '../../styles';

const CalculatorContainer = styled.div`
  margin-top: 32px;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff;
    border: 1px solid #eff2f5;
    border-radius: 4px;
    box-shadow: 0px 0px 20px 0px rgb(76 87 125 / 2%);
  }
`;

const CalculatorTitle = styled.h1`
  margin-top: 30px;
  margin-bottom: 4px;
  font-size: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const CalculatorDesc = styled.h2`
  color: #b5b5c3 !important;
  font-weight: 500;
  font-size: 12px;
  margin-top: 8px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const CalculatorInputContainer = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const CalculatorNumberInput = styled.input`
  display: block;
  padding: 16px 12px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  border: 1px solid #d5dadc;
  appearance: none;
  border-radius: 0.475rem;
  padding-left: 2.5rem !important;
  box-shadow: none !important;
  background-color: #f5f8fa;
  color: #5e6278;
  transition: color 0.2s ease, background-color 0.2s ease;
  margin-bottom: 10px;

  @media only screen and (min-width: 768px) {
    width: 100%;
    margin-right: 10px;
    margin-bottom: 0;
  }
`;

const CalculatorNumberSubmitButton = styled.button`
  display: block;
  width: 100%;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  font-size: 20px;
  border-radius: 0.475rem;
  margin-right: 1.25rem !important;
  outline: none !important;
  cursor: pointer;
  color: #ffffff;
  background-color: #009ef7;
  box-shadow: none !important;
  border: 0;
  padding: 16px 12px;

  @media only screen and (min-width: 768px) {
    padding: calc(0.75rem + 1px) calc(1.5rem + 1px);
  }
`;

const CalculatorOutputContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  font-size: 32px;
  padding: 20px 0;
  display: flex;
  color: #009ef7;
  margin-bottom: 0.75rem !important;
  border-radius: 0.475rem !important;
  min-width: 125px !important;
  border-color: #e4e6ef !important;
  border-style: dashed !important;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin-top: 20px;
    padding: 20px;
    width: 200px;
  }
`;

const CalculatorImgContainer = styled.div`
  & img {
    max-width: 300px !important;
    height: auto;
  }
`;

const CalculatorImg = styled(Image)``;

export {
  CalculatorContainer,
  CalculatorTitle,
  CalculatorDesc,
  CalculatorInputContainer,
  CalculatorImgContainer,
  CalculatorImg,
  CalculatorNumberInput,
  CalculatorNumberSubmitButton,
  CalculatorOutputContainer,
};
