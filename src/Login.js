// Login.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './store/actions';
import { post } from './api';

const Login = () => {
  const [id, setid] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();

  const handleSubmitId = async (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleSubmitPw = async (e) => {
    e.preventDefault();
    try {
      const { username } = await post('/login', { id, password });
      dispatch(login(username));
    } catch (e) {
      alert('로그인 과정 중 에러가 발생햇습니다.', e);
      console.error('로그인 과정 중 에러가 발생햇습니다.', e);
    }
  };

  return step === 0 ? (
    <form onSubmit={handleSubmitId}>
      <input
        type='text'
        placeholder='아이디'
        value={id}
        onChange={(e) => {
          setid(e.target.value);
        }}
      />
      <button type='submit' onClick={handleSubmitId}>
        다음
      </button>
    </form>
  ) : (
    <form onSubmit={handleSubmitPw}>
      <input
        type='password'
        placeholder='비밀번호'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type='submit' onClick={handleSubmitPw}>
        로그인
      </button>
    </form>
  );
};

export default Login;
