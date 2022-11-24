import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Menu = styled.nav`
  display: flex;
  background-color: var(--white);
  padding: 10px calc((100% - 1024px) / 2);
  margin: 0 -30px;
`;

Menu.Item = styled.div`
  padding: 0 30px;
  font-weight: 700;
`;
