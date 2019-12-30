const assets = require('../../common/assets');

module.exports = function(req, res) {
  const manifest = {
    name: 'Checkr Sendr',
    short_name: 'Sendr',
    lang: req.language,
    icons: [
      {
        src: assets.get('checkr-favicon-150x150.png'),
        type: 'image/png',
        sizes: '150x150'
      },
      {
        src: assets.get('checkr_logo_white.png'),
        type: 'image/png',
        sizes: '1200x400'
      }
    ],
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#220033',
    background_color: 'white'
  };
  res.set('Content-Type', 'application/manifest+json');
  res.json(manifest);
};
