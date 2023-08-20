// App.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import { login } from './store/actions';
import { logout } from './store/actions';

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(login(storedUser));
    }
  }, []);

  const handleLogin = (username) => {
    const user = { username };
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
  };

  return (
    <div className='App'>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <p>{`${user.username}님 환영합니다!`}</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      )}
    </div>
  );
};

export default App;
