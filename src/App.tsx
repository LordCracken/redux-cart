import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { RootState } from './store';

const App = () => {
  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    (async () => {
      const url =
        'https://reduxcart-b32e8-default-rtdb.europe-west1.firebasedatabase.app/cart.json';
      const response = await fetch(url, { method: 'PUT', body: JSON.stringify(cart) });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      const data = await response.json();
    })();
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
