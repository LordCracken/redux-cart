import { FC } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../UI/Card';

import { cartActions } from '../../store/cart-slice';

import { IProductItem } from '../../interfaces';
import classes from './ProductItem.module.css';

const ProductItem: FC<IProductItem> = ({ id, title, price, description }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItem({ id, title, price }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
