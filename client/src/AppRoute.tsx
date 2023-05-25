import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Vote from './pages/Vote';

const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/vote' element={<Vote />} />
    </Routes>
  );
};

export default AppRoute;
