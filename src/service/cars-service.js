import axios from 'axios';

axios.defaults.baseURL = 'https://648acbb117f1536d65e9b3c7.mockapi.io';

// export const getTotalCarCount = async () => {
//   try {
//     const response = await axios.get('/cars');
//     return response.data.length;
//   } catch (error) {
//     throw error;
//   }
// };

export const getCars = async page => {
  try {
    const response = await axios.get('/cars', {
      params: {
        page: page,
        limit: 8,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
