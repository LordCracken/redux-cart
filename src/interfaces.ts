import { ReactNode } from 'react';

export interface ICartItem {
  id: string;
  title: string;
  quantity: number;
  total: number;
  price: number;
}

export interface IProductItem {
  id: string;
  title: string;
  price: number;
  description: string;
}

export interface ILayout {
  children: ReactNode;
}

export interface ICard {
  children: ReactNode;
  className?: string;
}
