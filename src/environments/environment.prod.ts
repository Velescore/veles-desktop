declare const require: any;

export const environment = {
  production: false,
  version: require('../../package.json').version,
  releasesUrl: '',
  envName: 'prod',
  velesHost: 'localhost',
  velesPort: 5493
};
