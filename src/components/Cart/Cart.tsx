import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import CartItem from './CartItem';

import { RootState } from '../../store';
import classes from './Cart.module.css';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            quantity={item.quantity}
            total={item.total}
            price={item.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
