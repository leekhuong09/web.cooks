import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.div`
  margin: 0 0 30px;
  font-size: var(--font-size-large);
  font-weight: 600;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  > div {
    width: 30%;
  }
`;
