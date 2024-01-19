import { createBrowserRouter } from 'react-router-dom';

import { PATHS } from 'constants/paths';
import DefaultLayout from 'layout/DefaultLayout';
import Home from 'pages/home';
import Order from 'pages/order';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <Home />,
      },
      {
        path: PATHS.ORDER,
        element: <Order />,
      },
    ],
  },
]);

export default router;
