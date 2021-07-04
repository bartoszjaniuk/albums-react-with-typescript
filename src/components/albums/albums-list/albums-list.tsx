import React from 'react';
import styles from './albums-list.module.scss';
import { IPhotos } from '../../../interfaces/Photos';
import AlbumItem from '../album-item/album-item';

const AlbumsList: React.FC<{
  photos: IPhotos[];
}> = ({ photos }) => {
  return (
    <div className={styles.albums}>
      {photos.map(item => {
        return <AlbumItem {...item} key={item.id} />;
      })}
    </div>
  );
};

export default AlbumsList;
