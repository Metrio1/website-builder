import { createBrowserRouter } from 'react-router-dom';
import Reg from '../pages/reg';
import Auth from '../pages/auth';
import Home from '../pages/home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/registration',
    element: <Reg />,
  },
]);

export default routes;
