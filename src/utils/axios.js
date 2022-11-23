import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { DOMAIN_API, AUTH_TOKEN } = publicRuntimeConfig;

const instance = axios.create({
  baseURL: DOMAIN_API,
});

instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default instance;
