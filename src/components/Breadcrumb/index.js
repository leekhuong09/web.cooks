import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';

import { Link } from 'routes';

import { Wrapper, Item } from './styled';

const Breadcrumb = ({ data }) => {
  return (
    <Wrapper>
      <List data={data}>
        {({ title, router }, index) => (
          <>
            {index > 0 && <Item> / </Item>}
            {router ? (
              <Link {...router}>
                <Item>{title}</Item>
              </Link>
            ) : (
              <Item>{title}</Item>
            )}
          </>
        )}
      </List>
    </Wrapper>
  );
};

Breadcrumb.propTypes = {
  data: PropTypes.array,
};

export default Breadcrumb;
