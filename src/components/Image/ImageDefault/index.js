import React from 'react';
import PropTypes from 'prop-types';
import getConfig from 'next/config';

import { Wrapper, Image } from './styled';

const { publicRuntimeConfig } = getConfig();

const ImageDefault = ({ src, children, ...otherProps }) => {
  return (
    <Wrapper>
      <Image src={publicRuntimeConfig.DOMAIN_API + src} {...otherProps} />
      {children}
    </Wrapper>
  );
};

ImageDefault.propTypes = {
  src: PropTypes.string,
  children: PropTypes.any,
};

export default ImageDefault;
