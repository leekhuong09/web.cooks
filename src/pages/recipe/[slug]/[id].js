import React from 'react';
import PropTypes from 'prop-types';

import DetailLayout from 'layouts/DetailLayout';

import Breadcrumb from 'components/Breadcrumb';
import Recipe from 'containers/Recipe';

import { getMenu, getRecipeDetail } from 'services';

const RecipePage = ({ menu, recipes }) => {
  const data = [
    { title: 'Trang chủ', router: { route: '/' } },
    recipes?.attributes?.category?.data?.attributes && {
      title: recipes?.attributes?.category?.data?.attributes.title,
      router: {
        route: 'category',
        params: {
          id: recipes?.attributes?.category?.data?.id,
          slug: recipes?.attributes?.category?.data?.attributes?.slug,
        },
      },
    },
    recipes?.attributes && { title: recipes?.attributes.title },
  ];
  return (
    <DetailLayout menu={menu}>
      <Breadcrumb data={data} />
      <Recipe data={recipes?.attributes} />
    </DetailLayout>
  );
};

RecipePage.propTypes = {
  menu: PropTypes.array,
  category: PropTypes.object,
  recipes: PropTypes.array,
};

export async function getServerSideProps({ params: { id } }) {
  // Fetch data from external API
  const { data: menu } = await getMenu();
  const { data: recipes } = await getRecipeDetail(id);
  // Pass data to the page via props
  return { props: { menu, recipes } };
}

export default RecipePage;
