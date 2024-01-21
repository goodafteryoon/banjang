import styled from 'styled-components';

import { Item } from 'models/product';
import { formatPrice } from 'utils/formatPrice';
import { useOrderStore } from 'store/orderStore';

interface ProductItemProps {
  item: Item;
}

const ProductItem = ({ item }: ProductItemProps) => {
  const { addItem, removeItem, items } = useOrderStore();
  const itemQuantity = items[item.id]?.quantity ?? 0;

  const isEvented = item.event === 1;
  const isSelected = itemQuantity > 0;

  const handleIncrease = () => {
    addItem(item.id, item.price);
  };

  const handleDecrease = () => {
    removeItem(item.id);
  };

  return (
    <Container highlight={isSelected}>
      <Image />
      <InfoContainer>
        <NameBox>
          <span>{item.name}</span>
          {isEvented && <EventLabel>이벤트</EventLabel>}
        </NameBox>
        <PriceBox>
          <CounterBox>
            <button onClick={handleDecrease}>-</button>
            <span>{itemQuantity}</span>
            <button onClick={handleIncrease}>+</button>
          </CounterBox>
          <div>{formatPrice(item.price)}</div>
        </PriceBox>
      </InfoContainer>
    </Container>
  );
};

export default ProductItem;

const Container = styled.li<{ highlight: boolean }>`
  width: 100%;
  height: 80px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  padding: 9px 12px;
  font-size: 18px;
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) =>
    props.highlight ? props.theme.color.highlight : props.theme.color};
  border-radius: 15px;
  gap: 20px;
`;

const Image = styled.div`
  width: 62px;
  height: 62px;
  background-color: #d9d9d9;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const NameBox = styled.div`
  display: flex;
  gap: 10px;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EventLabel = styled.span`
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.accent};
  width: 53px;
  height: 23px;
  font-size: 13px;
  color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterBox = styled.div`
  display: flex;
  gap: 10px;
`;
