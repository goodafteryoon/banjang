import { createBrowserRouter } from 'react-router-dom';

import { PATHS } from 'constants/paths';
import DefaultLayout from 'layout/DefaultLayout';
import Home from 'pages/home';
import Order from 'pages/order';
import Complete from 'pages/complete';
import Error from 'pages/error';

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
      {
        path: PATHS.COMPLETE,
        element: <Complete />,
      },
      {
        path: PATHS.ERROR,
        element: <Error />,
      },
    ],
  },
]);

export default router;
