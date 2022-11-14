import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { RootState } from './store';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  const cart = useSelector((state: RootState) => state.cart);
  const notification = useSelector((state: RootState) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        }),
      );

      const url =
        'https://reduxcart-b32e8-default-rtdb.europe-west1.firebasedatabase.app/cart.json';
      const response = await fetch(url, { method: 'PUT', body: JSON.stringify(cart) });

      if (!response.ok) {
        throw new Error('Sending cart data failed!');
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        }),
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(() => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        }),
      );
    });
  }, [cart]);

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
};

export default App;
