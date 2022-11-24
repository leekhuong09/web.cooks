import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from 'layouts/DefaultLayout';

import { getMenu } from 'services/menu';

const CategoryPage = ({ menu }) => {
  return <DefaultLayout menu={menu}>Chuyên mục</DefaultLayout>;
};

CategoryPage.propTypes = {
  menu: PropTypes.array,
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await getMenu();
  // Pass data to the page via props
  return { props: { menu: res.data } };
}

export default CategoryPage;
