import { FC } from 'react';

import { ICard } from '../../interfaces';
import classes from './Card.module.css';

const Card: FC<ICard> = ({ children, className }) => {
  return <section className={`${classes.card} ${className ? className : ''}`}>{children}</section>;
};

export default Card;
