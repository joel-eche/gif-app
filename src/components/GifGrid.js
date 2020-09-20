import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid animate__animated animate__pulse">
        {
          loading ?
            <p>Loading...</p>
            :
            data.map(image => (
              <GifGridItem
                key={image.id}
                {...image}
              />
            ))
        }
      </div>
    </>
  )
}