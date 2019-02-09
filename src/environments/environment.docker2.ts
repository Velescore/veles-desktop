declare const require: any;

export const environment = {
  production: false,
  releasesUrl: '',
  version: require('../../package.json').version,
  envName: 'docker2',
  velesHost: 'localhost',
  velesPort: 5493
};
