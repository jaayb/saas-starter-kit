import packageInfo from '../package.json';
import env from './env';

const app = {
  version: packageInfo.version,
  name: 'myEZcare',
  logoUrl: 'https://myezcare.com/wp-content/uploads/2023/11/logo-1-1.png',
  url: env.appUrl,
};

export default app;
