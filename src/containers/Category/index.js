import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import DefaultCard from 'components/Card/DefaultCard';

import { Wrapper, Title, Content } from './styled';

const Category = ({ title, recipes }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <List data={recipes}>
          {({ id, attributes }) => <DefaultCard id={id} {...attributes} />}
        </List>
      </Content>
    </Wrapper>
  );
};

Category.propTypes = {
  title: PropTypes.strung,
  recipes: PropTypes.array,
};

export default Category;
