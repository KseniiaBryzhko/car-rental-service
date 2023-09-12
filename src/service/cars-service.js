import axios from 'axios';

axios.defaults.baseURL = 'https://648acbb117f1536d65e9b3c7.mockapi.io/cars';

export const getCars = async () => {
  const cars = await axios.get();
  return cars;
};
