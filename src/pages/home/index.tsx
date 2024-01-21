import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import LogoIcon from 'assets/imageComponents/LogoIcon';
import { PATHS } from 'constants/paths';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <LogoIcon />
      <Button onClick={() => navigate(PATHS.ORDER)}>주문하러 가기</Button>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: #000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 41px;
`;

const Button = styled.button`
  background-color: #fff;
  width: 172px;
  height: 88px;
  border-radius: 20px;
  font-size: 25px;
  transition: background-color 0.1s, color 0.1s;

  &:hover {
    background-color: #f75a2f;
    color: #fff;
  }
`;
