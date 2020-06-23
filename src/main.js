import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo'

const albums = spotify.search.albums('soundgarden');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4')
const albumListInfo = document.getElementById('album-info');

albums
  .then(data => renderAlbums(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumListInfo))