import React from 'react';

import { Link } from 'routes';

import { Wrapper, Logo } from './styled';

const DefaultHeader = () => {
  return (
    <Wrapper id="default-header">
      <Link route="/">
        <Logo src="/images/naumongi_logo.png" alt="Nấu món gì" />
      </Link>
    </Wrapper>
  );
};

export default DefaultHeader;
