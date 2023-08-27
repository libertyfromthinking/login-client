import { useDispatch, useSelector } from 'react-redux';
import { logout } from './store/actions';
import Login from './Login';

const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user) || null;
  console.log('username', username);
  const handleLogout = () => {
    dispatch(logout());
  };

  return !username ? (
    <Login />
  ) : (
    <div>
      <p>{`${username}님 환영합니다!`}</p>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default Home;
