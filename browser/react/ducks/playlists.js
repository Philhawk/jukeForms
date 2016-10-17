const ADD_PLAYLIST = 'ADD_PLAYLIST';

export const addPlaylist = newPlaylist => ({
  type: ADD_PLAYLIST,
  newPlaylist
});

const initialState = [];

export default function playlistsReducer (state = initialState, action) {
  switch(action.type) {
    case ADD_PLAYLIST: return action.newPlaylist;
    default: return state
  }
};
