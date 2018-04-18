import axios from 'axios';


const ADD_SONG = "ADD_SONG";


const initialState = {
    song: []
}


export function addSong(song, artist, album) {
    return {
        type: ADD_SONG,
        payload: axios
          .post("/addsong", {
              song: song,
              artist: artist, 
              album: album 
          })
          .then(res => {
              return res.data;
          })
    }
}


export default function reducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {


      case `${ADD_SONG}_PENDING`:
        return Object.assign({}, state, { isLoading: true });
  
      case `${ADD_SONG}_FULFILLED`:
        console.log(action.payload);
        return Object.assign({}, state, {
          isLoading: false,
          song: action.payload
        });
  
      case `${ADD_SONG}_REJECTED`:
        return Object.assign({}, state, {
          isLoading: false,
          didErr: true,
          errMessage: action.payload
        });

    default:
      return state;
  }
}