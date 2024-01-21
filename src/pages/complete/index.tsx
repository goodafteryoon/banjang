import CheckIcon from 'assets/imageComponents/CheckIcon';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Complete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/order');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
      <CheckIcon />
      <Text>주문이 완료되었습니다.</Text>
    </Container>
  );
};

export default Complete;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const Text = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.color.black};
`;
