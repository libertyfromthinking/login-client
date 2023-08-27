import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // 여기에 API의 기본 주소를 적어주세요.
});

export const get = async (url) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.error('API서버 요청 중 네트워크 에러가 발생했습니다.', error);
  }
};

export const post = async (url, data) => {
  try {
    const response = await instance.post(url, data);
    return response.data;
  } catch (error) {
    console.error('API서버 요청 중 네트워크 에러가 발생했습니다.', error);
  }
};
