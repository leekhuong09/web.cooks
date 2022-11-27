import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 32px 0 0;
`;

export const Title = styled.div`
  margin: 32px 0;
  font-size: var(--font-size-large);
  font-weight: 600;
  text-align: center;
`;

export const Date = styled.div`
  margin: 30px 0;
  text-align: center;
`;

export const InfoWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 32px;
  line-height: 1.6;
`;

export const Info = styled.div`
  display: flex;
`;

Info.Item = styled.div`
  margin: 0 16px;
`;

export const SectionTitle = styled.div`
  font-size: var(--font-size-x-large);
  margin-bottom: 16px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

ListItem.Item = styled.div`
  width: 50%;
  margin-bottom: 8px;
`;

export const Steps = styled.div`
  margin-top: 32px;
  margin-bottom: 8px;
`;

Steps.Item = styled.div`
  margin-bottom: 8px;
`;

Steps.Tips = styled.div`
  padding: 10px;
  background-color: var(--white);
  border-radius: 5px;
`;

Steps.ImageWP = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
Steps.Image = styled.div`
  width: calc((100% - 60px) / 3);
  margin: 10px 0;
  &.img-2-length,
  .img-4-length {
    width: calc((100% - 60px) / 2);
  }
  &.img-1-length {
    width: 100%;
  }
`;
