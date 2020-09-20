export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=y4OVO9PrrtKq9HKH0pLRCXFfS5C7Hy73`;
  const res = await fetch(url);
  const { data } = await res.json();
  const imagesResult = data.map(element => ({
    id: element.id,
    title: element.title,
    url: element.images.downsized_medium.url
  }));
  return imagesResult;
}