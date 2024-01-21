## 실행 방법

npm install && npm start

- http://localhost:3000 으로 확인 가능합니다.

## 구현 기능

- Home 화면
- Order 화면
  - 주문 아이템 리스트 불러오기
    - 주문 아이템 항목별 수량 선택
    - 총 수량 표시
    - 총 가격 표시
- Complete / Error 화면
  - 50% 확률로 주문 성공 또는 실패 페이지로 이동
  - 3초 후 /order 페이지로 이동

## 사용한 기술 스택 및 라이브러리

### TypeScript

JavaScript에 타입을 추가하여 개발 시 실수를 줄이고, 가독성 및 유지보수성을 향상시키기 위해 사용했습니다.

### Styled-components

컴포넌트 스타일을 캡슐화하여 스타일 충돌을 방지하고, 동적 스타일링을 용이하게 하기 위해 사용했습니다.

### zustand

보일러플레이트 코드가 많지 않아 상태 관리를 위해 zustand를 사용했습니다. 주문 항목별 item의 개수와 가격을 위한 counter에 필요한 전역 변수 관리에 사용했습니다.

### React-Query

서버 상태를 분리해서 관리하기 위해 react-query를 사용했습니다.
