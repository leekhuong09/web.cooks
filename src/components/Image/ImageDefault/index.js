import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Image } from './styled';

const ImageDefault = ({ src, children, ...otherProps }) => {
  return (
    <Wrapper>
      <Image src={src} {...otherProps} />
      {children}
    </Wrapper>
  );
};

ImageDefault.propTypes = {
  src: PropTypes.string,
  children: PropTypes.any,
};

export default ImageDefault;
