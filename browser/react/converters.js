'use strict';

export const convertSong = song => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

export const convertAlbum = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
};

export const convertAlbums = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  return album;
};

export const convertArtist = ({ artist, songs, albums }) => {
  songs = songs.map(convertSong);
  albums = albums.map(convertAlbum);
  artist.songs = songs;
  artist.albums = albums;
  return artist;
};
