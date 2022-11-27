import React from 'react';
import PropTypes from 'prop-types';

import ImageDefault from 'components/Image/ImageDefault';

import { formatDate } from 'utils/dateTime';

import { Link } from 'routes';

import { Wrapper, Info } from './styled';

const DefaultCard = ({ id, title, slug, image, cooktime, difficult, servings, publishedAt }) => {
  return (
    <Wrapper>
      <Link route="recipe" params={{ id, slug }}>
        <>
          <ImageDefault src={image?.data?.attributes?.formats?.thumbnail?.url} />
          <Info>
            <Info.Title>{title}</Info.Title>
            <Info.Date>Ngày đăng: {formatDate(publishedAt)}</Info.Date>
            <Info.Sub>
              <Info.Sub.Item>{servings} người</Info.Sub.Item>
              <Info.Sub.Item>{difficult}</Info.Sub.Item>
              <Info.Sub.Item>{cooktime} phút</Info.Sub.Item>
            </Info.Sub>
          </Info>
        </>
      </Link>
    </Wrapper>
  );
};

DefaultCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.any,
  cooktime: PropTypes.number,
  difficult: PropTypes.string,
  servings: PropTypes.number,
  publishedAt: PropTypes.string,
};

export default DefaultCard;
