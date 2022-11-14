import { ReactNode } from 'react';

export interface ICartItem {
  title: string;
  quantity: number;
  total: number;
  price: number;
}

export interface ILayout {
  children: ReactNode;
}

export interface ICard {
  children: ReactNode;
  className?: string;
}

export interface ICartItemComponent {
  item: ICartItem;
}

export interface IProductItem {
  title: string;
  price: number;
  description: string;
}
