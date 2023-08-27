// Login.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import PwInput from './PwInput';
import IdInput from './IdInput';
import { login } from '../store/actions';
import { post } from '../api';
import BackButton from './BackButton';

const Login = () => {
  const [id, setId] = useState('');
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

  const InputComponent = () => {
    return step === 0 ? (
      <IdInput onSubmit={handleSubmitId} value={id} setValue={setId} />
    ) : (
      <PwInput
        onSubmit={handleSubmitPw}
        value={password}
        setValue={setPassword}
      />
    );
  };

  return (
    <div className='input-screen-container'>
      <BackButton to={-1} />
      <div className='input-wrapper'>
        <InputComponent />
      </div>
    </div>
  );
};

export default Login;
