import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { RootState } from './store';
import { sendCartData } from './store/cart-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  const cart = useSelector((state: RootState) => state.cart);
  const notification = useSelector((state: RootState) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    // @ts-ignore
    dispatch(sendCartData(cart));
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
