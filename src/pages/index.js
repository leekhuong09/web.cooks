import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { getMenu } from 'services/menu';

const HomePage = ({ data }) => {
  return (
    <div>
      {data.data.map(value => (
        <div key={value.id}>{value.attributes.Title}</div>
      ))}
      Welcome to Next.js!<Link href="/about">About Us</Link>
    </div>
  );
};

HomePage.propTypes = {
  data: PropTypes.any,
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await getMenu();
  // Pass data to the page via props
  return { props: { data: res } };
}

export default HomePage;
