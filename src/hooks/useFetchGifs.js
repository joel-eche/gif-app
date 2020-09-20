import { useState, useEffect } from "react"
import { getGifs } from './../helpers/api';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });


  useEffect(() => {
    getGifs(category)
      .then(
        imagesResult => {
          setState(
            {
              data: imagesResult,
              loading: false
            }
          )
        }
      );
  }, [category]);

  return state;
}