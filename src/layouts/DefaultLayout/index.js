import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'routes';

import DefaultHeader from 'components/Header/DefaultHead';

import { Wrapper, Menu } from './styled';

const DefaultLayout = ({ children, menu }) => {
  return (
    <Wrapper>
      <DefaultHeader />
      <Menu>
        {menu.map(value => (
          <Link
            route="category"
            params={{ slug: value?.attributes?.slug || '', id: value?.id || '' }}
            key={value.id}>
            <Menu.Item>{value.attributes.title}</Menu.Item>
          </Link>
        ))}
      </Menu>
      {children}
    </Wrapper>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.any,
  menu: PropTypes.array,
};

export default DefaultLayout;
