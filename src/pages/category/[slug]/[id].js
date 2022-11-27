import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from 'layouts/DefaultLayout';

import Category from 'containers/Category';

import { getRecipesWithCategory, getMenu, getCategory } from 'services';

const CategoryPage = ({ menu, category, recipes }) => {
  return (
    <DefaultLayout menu={menu}>
      <Category title={category?.attributes?.title} recipes={recipes} />
    </DefaultLayout>
  );
};

CategoryPage.propTypes = {
  menu: PropTypes.array,
  category: PropTypes.object,
  recipes: PropTypes.array,
};

export async function getServerSideProps({ params: { id } }) {
  // Fetch data from external API
  const { data: menu } = await getMenu();
  const { data: category } = await getCategory(id);
  const { data: recipes } = await getRecipesWithCategory(id);
  // Pass data to the page via props
  return { props: { menu, recipes, category } };
}

export default CategoryPage;
