import { createBrowserRouter } from 'react-router-dom';
import Reg from '../pages/reg';
import Auth from '../pages/auth';
import Home from '../pages/home';
import Basic from '../pages/basic/ui/index.jsx';
import Start from '../pages/start/ui/index.jsx';
import FirstLayout from '../pages/first-layout/ui/index.jsx';

const routes = createBrowserRouter([
  {
    path: '/start',
    element: <Start />,
  },
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
  {
    path: '/basic',
    element: <Basic />,
  },
  {
    path: '/first-layout',
    element: <FirstLayout />,
  },
]);

export default routes;
