import { Routes, Route, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// styles
import 'react-toastify/dist/ReactToastify.css';

// pages
import Home from './pages/Home';
import Scan from './pages/Scan';
import Vote from './pages/Vote';
import LuckyDraw from './pages/LuckyDraw';

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<PortalWrapper />}>
        <Route path='/' element={<Home />} />
        <Route path='/scan' element={<Scan />} />
        <Route path='/vote/:tokenId' element={<Vote />} />
        <Route path='/luckydraw' element={<LuckyDraw />} />
      </Route>
    </Routes>
  );
};

const PortalWrapper = () => {
  return (
    <>
      <ToastContainer theme='dark' autoClose={3000} position='top-center' />
      <Outlet />
    </>
  );
};

export default AppRoute;
