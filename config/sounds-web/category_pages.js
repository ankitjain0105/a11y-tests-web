const baseUrl = process.env.A11Y_SOUNDS_WEB_BASE_URL || 'https://www.bbc.co.uk';

const { options } = require('./common');

module.exports = {
  options,
  baseUrl,
  paths: [
    '/sounds/brand/b006tnxf',
    '/sounds/categories',
    '/sounds/category/comedy?sort=popular'
  ],
  signedInPaths: [
    '/sounds/brand/b006tnxf',
    '/sounds/categories',
    '/sounds/category/comedy?sort=popular'
  ]
};
