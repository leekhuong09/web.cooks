const ROUTES = {
  home: { name: 'home', page: '/', pattern: '/' },
  category: {
    name: 'category',
    page: '/category/:slug/:id',
    pattern: '/top-nhung-cach-lam-:slug-:id(\\d+).html',
  },
  recipe: {
    name: 'recipe',
    page: '/recipe/:slug/:id',
    pattern: '/cach-lam-mon-:slug-:id(\\d+).html',
  },
};

module.exports = ROUTES;
