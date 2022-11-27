import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'routes';

import DefaultHeader from 'components/Header/DefaultHead';
import DefaultBox from 'components/Box/DefaultBox';

import { Wrapper, Menu, Content, ContentWrapper, Sidebar } from './styled';

const DetailLayout = ({ children, menu }) => {
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
      <ContentWrapper>
        <Content>{children}</Content>
        <Sidebar>
          <DefaultBox title="Nổi bật"></DefaultBox>
          <DefaultBox title="Mới nhất"></DefaultBox>
        </Sidebar>
      </ContentWrapper>
    </Wrapper>
  );
};

DetailLayout.defaultProps = {
  menu: [],
};

DetailLayout.propTypes = {
  children: PropTypes.any,
  menu: PropTypes.array,
};

export default DetailLayout;
