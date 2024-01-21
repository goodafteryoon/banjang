import styled from 'styled-components';

import LogoHeader from 'components/LogoHeader';
import BottomTab from 'components/BottomTab';
import { HEADER_HEIGHT, BOTTOM_TAB_HEIGHT } from 'constants/layoutConstants';

const Order = () => {
  return (
    <>
      <LogoHeader />
      <StyledMain></StyledMain>
      <BottomTab />
    </>
  );
};

export default Order;

const StyledMain = styled.main`
  height: calc(100% - ${BOTTOM_TAB_HEIGHT});
  padding-top: ${HEADER_HEIGHT};
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
