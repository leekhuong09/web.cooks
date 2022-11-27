import React from 'react';
import PropTypes from 'prop-types';

import ImageDefault from 'components/Image/ImageDefault';
import List from 'components/List';

import { formatDate } from 'utils/dateTime';

import { Wrapper, Title, Date, Info, InfoWrapper, SectionTitle, ListItem, Steps } from './styled';

const DetailCard = ({
  title,
  image,
  cooktime,
  difficult,
  servings,
  publishedAt,
  descriptions,
  materials,
  steps,
}) => {
  return (
    <Wrapper>
      <ImageDefault src={image?.data?.attributes?.formats?.small?.url}></ImageDefault>
      <Title>{title}</Title>
      <Date>Ngày đăng: {formatDate(publishedAt)}</Date>
      <InfoWrapper>
        <Info>
          <Info.Item>{cooktime} phút</Info.Item>
          <Info.Item>{difficult}</Info.Item>
          <Info.Item>{servings} người</Info.Item>
        </Info>
      </InfoWrapper>
      <InfoWrapper>{descriptions}</InfoWrapper>
      <SectionTitle>Nguyên liệu</SectionTitle>
      <ListItem>
        <List data={materials}>
          {({ material, measureValue }) => (
            <ListItem.Item>
              {material} <span>{measureValue}</span>
            </ListItem.Item>
          )}
        </List>
      </ListItem>
      <SectionTitle>Cách làm</SectionTitle>
      <List data={steps}>
        {({ intro, tips, Image }, index) => (
          <Steps>
            Bước {index + 1}: <Steps.Item>{intro}</Steps.Item>
            {tips && <Steps.Tips>Lưu ý: {tips}</Steps.Tips>}
            <Steps.ImageWP>
              <List data={Image?.data || []}>
                {value => (
                  <Steps.Image className={`img-${Image?.data?.length || 0}-length`}>
                    {console.log(value?.attributes)}
                    <ImageDefault src={value?.attributes?.formats?.small?.url}></ImageDefault>
                  </Steps.Image>
                )}
              </List>
            </Steps.ImageWP>
          </Steps>
        )}
      </List>
    </Wrapper>
  );
};

DetailCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  cooktime: PropTypes.number,
  difficult: PropTypes.string,
  servings: PropTypes.number,
  publishedAt: PropTypes.string,
  descriptions: PropTypes.string,
  materials: PropTypes.array,
  steps: PropTypes.array,
};

export default DetailCard;
