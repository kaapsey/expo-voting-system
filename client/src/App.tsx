import { BrowserRouter } from 'react-router-dom';

// routes
import AppRoute from './AppRoute';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </>
  );
};

export default App;
