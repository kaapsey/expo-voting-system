import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Scan from './pages/Scan';
import Vote from './pages/Vote';
import LuckyDraw from './pages/LuckyDraw';

const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/scan' element={<Scan />} />
      <Route path='/vote/:tokenId' element={<Vote />} />
      <Route path='/luckydraw' element={<LuckyDraw />} />
    </Routes>
  );
};

export default AppRoute;
