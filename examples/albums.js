global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';
const spotify = new SpotifyWrapper({
  token: 'BQDyk12MabW0hhcyUQ8uBAqdWs5uEBTOrIzm0xHggBHoZoxj6Rh1nI0UjNlmEN_61S3aFfmGi_4xJPh8BxNfmbleJzyFJz-cmRpgviEK42vx6HKDNF2rHjal-VHLdiCnrnybStURdjrwyjS5JQ8FiQRMCPM9bU7515c'
})
const albums = spotify.search.albums('Incubus');

albums.then(data => data
    .albums.items.map(item => console.log(item.name)));
