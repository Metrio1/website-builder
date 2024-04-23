import { createBrowserRouter } from 'react-router-dom';
import Reg from '../pages/reg';
import Auth from '../pages/auth';
import Home from '../pages/home';
import Basic from '../pages/basic/ui/index.jsx';
import Start from '../pages/start/ui/index.jsx';
import ColorSpectrum from '../pages/color-spectrum/ui/index.jsx';
import ContentCustomization from '../pages/content-customization/ui/index.jsx';

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
    path: '/color-spectrum',
    element: <ColorSpectrum />,
  },
  {
    path: '/content-customization',
    element: <ContentCustomization />,
  },
  {
    path: '/srcdoc',
    element: <ContentCustomization />,
  },
]);

export default routes;
