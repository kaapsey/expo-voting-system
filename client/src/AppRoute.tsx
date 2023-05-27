import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Scan from './pages/Scan';
import Vote from './pages/Vote';

const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/scan' element={<Scan />} />
      <Route path='/vote/:tokenId' element={<Vote />} />
    </Routes>
  );
};

export default AppRoute;
