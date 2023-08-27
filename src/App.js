// App.js
import Login from './component/Login';
import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
