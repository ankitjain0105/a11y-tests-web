const baseUrl = process.env.A11Y_SOUNDS_WEB_BASE_URL || 'https://www.bbc.co.uk';

const { options } = require('./common');

module.exports = {
  options,
  baseUrl,
  paths: [
    '/sounds',
    '/sounds/play/live:bbc_radio_one',
    '/sounds/play/m0009353',
    '/sounds/my',
    '/sounds/my/bookmarks',
    '/sounds/my/subscribed',
    '/sounds/brand/b006tnxf',
    '/sounds/categories',
    '/sounds/category/comedy?sort=popular'
  ],
  signedInPaths: [
    '/sounds',
    '/sounds/play/live:bbc_radio_one',
    '/sounds/play/m0009353',
    '/sounds/my',
    '/sounds/my/bookmarks',
    '/sounds/my/subscribed',
    '/sounds/brand/b006tnxf',
    '/sounds/categories',
    '/sounds/category/comedy?sort=popular'
  ]
};
