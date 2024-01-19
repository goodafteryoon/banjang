import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default DefaultLayout;

const Container = styled.div`
  max-width: 560px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`;
