import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';
import searchEnterTrigger from './SearchTrigger';

searchEnterTrigger()

const album = spotify.album.getAlbum('2W6MaUiInBkna5DfBES4E3');
const albumListInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

album
  .then(data => renderAlbumInfo(data, albumListInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
