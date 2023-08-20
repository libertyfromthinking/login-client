// Login.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './store/actions';
import { post } from './api';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await post('/login', { username, password });

      const { username: loggedInUsername } = response.data;
      onLogin(loggedInUsername);
      dispatch(login(loggedInUsername));
    } catch (error) {
      console.log(error);

      if (error.response && error.response.status === 401) {
        alert('인증에 실패하였습니다. 다시 시도해주세요.');
      } else {
        alert('오류가 발생했습니다. 다시 시도해주세요.', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='아이디'
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type='password'
        placeholder='비밀번호'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type='submit'>로그인</button>
    </form>
  );
};

export default Login;
