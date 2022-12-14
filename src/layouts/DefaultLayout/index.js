import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'routes';

import DefaultHeader from 'components/Header/DefaultHead';

import { Wrapper, Menu, Content } from './styled';

const DefaultLayout = ({ children, menu }) => {
  return (
    <Wrapper>
      <DefaultHeader />
      <Menu>
        {menu?.length &&
          menu?.map(value => (
            <Link
              route="category"
              params={{ slug: value?.attributes?.slug || '', id: value?.id || '' }}
              key={value.id}>
              <Menu.Item>{value.attributes.title}</Menu.Item>
            </Link>
          ))}
      </Menu>
      <Content>{children}</Content>
    </Wrapper>
  );
};

DefaultLayout.defaultProps = {
  menu: [],
};

DefaultLayout.propTypes = {
  children: PropTypes.any,
  menu: PropTypes.array,
};

export default DefaultLayout;
