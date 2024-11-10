import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Bookingpage from './pages/Bookingpage';
import ConfirmationPage from './pages/ConfirmationPage';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<Home />} path="/" />
      <Route element={<Bookingpage />} path="/bookings" />
      <Route element={<ConfirmationPage />} path="/confirmation" />
    </ReactRouterRoutes>
  );
};

export default Routes;
