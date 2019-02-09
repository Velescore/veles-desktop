declare const require: any;

export const environment = {
  production: false,
  releasesUrl: '',
  version: require('../../package.json').version,
  envName: 'docker1',
  velesHost: 'localhost',
  velesPort: 5493
};
