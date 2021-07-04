import React from 'react';
import { IPhotos } from '../../../interfaces/Photos';
import styles from './album-item.module.scss';

const AlbumItem: React.FC<IPhotos> = ({
  id,
  albumId,
  url,
  thumbnailUrl,
  title,
}) => {
  return (
    <div className={styles.album}>
      <img src={url} alt={title} className={styles.album__url} />
    </div>
  );
};

export default AlbumItem;
