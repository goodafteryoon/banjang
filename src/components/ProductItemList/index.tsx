import ProductItem from 'components/ProductItem';
import { Item } from 'models/product';
import styled from 'styled-components';

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
    return <span>목록을 불러오고 있습니다.</span>;
  }

  if (isError) {
    return <span>목록을 불러오는데 실패했습니다.</span>;
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
