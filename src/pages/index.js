import React from 'react';
import PropTypes from 'prop-types';

import DefaultBox from 'components/Box/DefaultBox';

import DefaultLayout from 'layouts/DefaultLayout';

import { getMenu } from 'services';

const HomePage = ({ menu }) => {
  return (
    <DefaultLayout menu={menu}>
      <DefaultBox title="Hôm nay ăn gì?"></DefaultBox>
      <DefaultBox title="Top món ăn được ưa yêu thích nhất"></DefaultBox>
      <DefaultBox title="Món ăn mới ra lò"></DefaultBox>
    </DefaultLayout>
  );
};

HomePage.propTypes = {
  menu: PropTypes.array,
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await getMenu();
  // Pass data to the page via props
  return { props: { menu: res?.data } };
}

export default HomePage;
