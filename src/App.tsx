import React, { useEffect, useState } from 'react';
import AlbumsList from './components/albums/albums-list/albums-list';
import api from './api/photos';

const App: React.FC = () => {
  const [photos, setPhotos] = useState([]);
  const fetchPhotos = async (url: string) => {
    try {
      const response = await api.get(url);
      const data = await response.data.slice(0, 20);
      setPhotos(data);
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
      <AlbumsList photos={photos} />
    </div>
  );
};

export default App;

// https://www.youtube.com/watch?v=Z5iWr6Srsj8&t=2s&ab_channel=BenAwad
// https://www.youtube.com/watch?v=cHYWsRflH-s&t=1766s&ab_channel=ChillOut%26LofiMusic
