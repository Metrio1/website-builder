import { createBrowserRouter, redirect } from 'react-router-dom';
import Reg from '../pages/reg/ui/index.jsx';
import Auth from '../pages/auth/ui/index.jsx';

const routes = createBrowserRouter([
    {
        path: '/reg',
        element: <Reg/>,
    },
    {
        path: '/auth',
        element: <Auth/>,
    }
]);

export default routes;
