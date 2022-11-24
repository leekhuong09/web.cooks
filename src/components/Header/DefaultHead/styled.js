import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 80px;
  width: 100%;
  background-color: var(--header-bg);
  display: flex;
  align-items: center;
  padding: 0 calc((100% - 1024px) / 2);
`;

export const Logo = styled.img`
  height: 50px;
`;
