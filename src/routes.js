import React from 'react';
import PropTypes from 'prop-types';
import { compile } from 'path-to-regexp';
import NextLink from 'next/link';
import NextRouter, { useRouter } from 'next/router';
import ROUTES from 'constants/routes';

const handlePath = (routeName, params) => {
  const ObjRoute = ROUTES[routeName];
  if (ObjRoute) {
    let route = ObjRoute?.pattern;
    if (!route) {
      return '';
    }

    if (!params) {
      return route;
    }
    let href = '';

    const toPathRegexp = compile(route, { encode: encodeURIComponent });
    href += toPathRegexp(params);

    Object.keys(params).forEach(key => {
      if (route.slice().indexOf(':' + key) === -1) {
        if (href.indexOf('?') === -1) {
          href += `?`;
        } else {
          href += `&`;
        }
        href += `${key}=${params[key]}`;
      }
    });
    return href;
  }
  return routeName;
};

const Router = () => Router;

Router.pushRoute = (routeName, params) => {
  NextRouter.push(handlePath(routeName, params));
};

Router.replaceRoute = (routeName, params) => {
  NextRouter.replace(handlePath(routeName, params));
};

Router.prefetchRoute = (routeName, params) => {
  NextRouter.prefetch(handlePath(routeName, params));
};

const Link = ({ route, params, children, ...ortherProps }) => {
  return (
    <NextLink href={handlePath(route, params) || '/'} className="a" {...ortherProps}>
      {children}
    </NextLink>
  );
};

Link.propTypes = {
  route: PropTypes.string,
  params: PropTypes.object,
  children: PropTypes.any,
};

export { Link, Router, useRouter };
