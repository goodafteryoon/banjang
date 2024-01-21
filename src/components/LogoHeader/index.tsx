import styled from 'styled-components';

import HeaderLogoIcon from 'assets/imageComponents/HeaderLogoIcon';
import { HEADER_HEIGHT } from 'constants/layoutConstants';

const LogoHeader = () => {
  return (
    <Wrapper>
      <HeaderLogoIcon />
    </Wrapper>
  );
};

export default LogoHeader;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 560px;
  height: ${HEADER_HEIGHT};
  background-color: ${(props) => props.theme.color.black};
  padding: 12px;
  /* box-shadow: 0px 4px 8px 0px rgba(193, 193, 193, 0.8); */
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;
