import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Content } from './styled';

const DefaultBox = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Wrapper>
  );
};

DefaultBox.defaultProps = {
  title: '(trống)',
  children: <>(đang cập nhật)</>,
};

DefaultBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default DefaultBox;
