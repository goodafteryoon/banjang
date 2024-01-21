import styled from 'styled-components';

import ProductItem from 'components/ProductItem';
import { Item } from 'models/product';

interface ProductItemListProps {
  data: Item[];
  isLoading: boolean;
  isError: boolean;
}

const ProductItemList = ({
  data,
  isLoading,
  isError,
}: ProductItemListProps) => {
  if (isLoading) {
    return (
      <StateText>
        <p>목록을</p>
        <p>불러오고 있습니다.</p>
      </StateText>
    );
  }

  if (isError) {
    return (
      <StateText>
        <p>목록을 불러오는데 실패했습니다.</p>
        <p>로컬 서버를 켰는지 확인해주세요</p>
      </StateText>
    );
  }

  return (
    <Wrapper>
      {data.map((item: Item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};

export default ProductItemList;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const StateText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 300px;
  font-size: 18px;
  text-align: center;
  gap: 10px;
`;
