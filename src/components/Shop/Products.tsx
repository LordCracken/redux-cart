import {useState, useEffect} from 'react';

import ProductItem from './ProductItem';

import { IProductItem } from '../../interfaces';
import classes from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState<IProductItem[]>([]);

  useEffect(() => {
    (async ()=>{
      const url = 'https://reduxcart-b32e8-default-rtdb.europe-west1.firebasedatabase.app/products.json';
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    })();
  }, []);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
