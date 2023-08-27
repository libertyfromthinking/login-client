// App.js
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import { logout } from './store/actions';
import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
  // return (
  //   <div className='App'>
  //     {!user ? (
  //       <Login />
  //     ) : (
  // <div>
  //   <p>{`${user.username}님 환영합니다!`}</p>
  //   <button onClick={handleLogout}>로그아웃</button>
  // </div>
  //     )}
  //   </div>
  // );
};

export default App;
