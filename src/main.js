import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albums = spotify.search.albums('soundgarden');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('2W6MaUiInBkna5DfBES4E3');
const albumListInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

albums
  .then(data => renderAlbums(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumListInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
