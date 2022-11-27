import React from 'react';
import PropTypes from 'prop-types';

import DetailCard from 'components/Card/DetailCard';

import { Wrapper } from './styled';

const Recipe = ({ data }) => {
  return (
    <Wrapper>
      <DetailCard
        image={data?.image}
        title={data?.title}
        publishedAt={data?.publishedAt}
        difficult={data?.difficult}
        servings={data?.servings}
        cooktime={data?.cooktime}
        descriptions={data?.descriptions}
        materials={data?.materials}
        steps={data?.steps}
      />
    </Wrapper>
  );
};

Recipe.propTypes = {
  data: PropTypes.object,
};

export default Recipe;
