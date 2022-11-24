const ROUTES = {
  home: { name: 'home', page: '/', pattern: '/' },
  category: {
    name: 'category',
    page: '/category',
    pattern: '/chuyen-muc/:slug.:id(\\d+).html',
  },
};

module.exports = ROUTES;
