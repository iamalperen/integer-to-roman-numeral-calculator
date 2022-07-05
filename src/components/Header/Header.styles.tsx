import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '../../styles';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: 75px;
  padding: 0;
  box-shadow: 0px 10px 30px 0px rgb(82 63 105 / 5%);

  ${Container} {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    color: #181c32;

    @media only screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 30px;
`;

export { HeaderContainer, StyledFontAwesomeIcon };
