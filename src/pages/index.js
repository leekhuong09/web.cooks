import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import DefaultLayout from 'layouts/DefaultLayout';

import { getMenu } from 'services/menu';

const HomePage = ({ menu }) => {
  return (
    <DefaultLayout menu={menu}>
      Welcome to Next.js!<Link href="/about">About Us</Link>
    </DefaultLayout>
  );
};

HomePage.propTypes = {
  data: PropTypes.any,
  menu: PropTypes.array,
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await getMenu();
  // Pass data to the page via props
  return { props: { menu: res.data } };
}

export default HomePage;
