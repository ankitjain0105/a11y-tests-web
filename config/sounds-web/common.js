const baseUrl = process.env.A11Y_SOUNDS_WEB_BASE_URL || 'https://www.bbc.co.uk';

module.exports = {
  options: {
    hide: [
      'orb',
      'bbccookies-prompt',
      'smphtml5iframebbcMediaPlayer',
      'smphtml5iframesmp-wrapper',
      'edr_l_first',
      'bbcprivacy-prompt',
      'id4-cta-',
      'msi-modal',
      'p_audioui_',
      'Non-focusable element with tabindex=0: //div' // no way around having divs with role button for layout reasons
    ],
    skip: []
  },
  baseUrl
};
