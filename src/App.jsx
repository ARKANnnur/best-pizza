import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home.jsx';
import Error from './ui/Error.jsx';
import AppLayout from './ui/AppLayout.jsx';

import Menu, { Loader as menuLoader } from './features/menu/Menu.jsx';
import Testing from './features/testing/Testing';
import Cart from './features/cart/Cart.jsx';
import CreateOrder, {
  Action as createOrderAction,
} from './features/order/CreateOrder.jsx';
import Order, { Loader as orderLoader } from './features/order/Order.jsx';
import { Action as updateOrderAction } from './features/order/UpdateOrder.jsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/testing',
        element: <Testing />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        action: updateOrderAction,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
