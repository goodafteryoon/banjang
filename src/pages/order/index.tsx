import styled from 'styled-components';
import axios from 'axios';
import { useQuery } from 'react-query';

import LogoHeader from 'components/LogoHeader';
import BottomTab from 'components/BottomTab';
import ProductItemList from 'components/ProductItemList';
import { BOTTOM_TAB_HEIGHT, HEADER_HEIGHT } from 'constants/layoutConstants';

const fetchItems = async () => {
  const { data } = await axios.get('http://localhost:3001/items');
  return data;
};

const Order = () => {
  const { data, isLoading, isError } = useQuery('items', fetchItems);

  return (
    <>
      <LogoHeader />
      <Section>
        <ProductItemList data={data} isLoading={isLoading} isError={isError} />
      </Section>
      <BottomTab />
    </>
  );
};

export default Order;

const Section = styled.section`
  height: calc(100% - ${BOTTOM_TAB_HEIGHT} - ${HEADER_HEIGHT});
  padding: 75px 25px 90px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
