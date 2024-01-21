import styled from 'styled-components';

const BottomTab = () => {
  return (
    <Container>
      <TotalContainer>
        <TotalText>총 수량 : 0개</TotalText>
        <TotalText>총 가격 : 0원</TotalText>
      </TotalContainer>
      <Button>주문하기</Button>
    </Container>
  );
};

export default BottomTab;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 560px;
  height: 170px;
  z-index: 10;
  border-radius: 20px 20px 0px 0px;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TotalText = styled.p`
  text-align: end;
  height: 26px;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  text-align: center;
  background-color: ${(props) => props.theme.color.disabled};
  color: ${(props) => props.theme.color.white};
`;
