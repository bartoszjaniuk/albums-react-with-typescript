import React, { useEffect, useReducer, useState } from 'react';
import AlbumsList from './components/albums/albums-list/albums-list';
import api from './api/photos';
import Search from './components/albums/search/search';
import { IPhotos } from './interfaces/Photos';

const initialState: InitialState = {
  photos: [],
};

interface InitialState {
  photos: IPhotos[];
}

type Actions = { type: 'GET_PHOTOS'; payload: [] } | { type: 'CLEAR_PHOTOS' };

const PhotosReducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case 'GET_PHOTOS':
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(PhotosReducer, initialState);
  const { photos } = state;
  const fetchPhotos = async (url: string) => {
    try {
      const response = await api.get(url);
      const data = await response.data.slice(0, 20);
      dispatch({ type: 'GET_PHOTOS', payload: data });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchPhotos('/');
  }, []);

  return (
    <div>
      <Search />
      <AlbumsList photos={photos} />
    </div>
  );
};

export default App;
