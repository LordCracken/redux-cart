import { ICartItem } from '../interfaces';

interface INotification {
  status: 'pending' | 'error' | 'success';
  title: string;
  message: string;
}

export interface IUiSlice {
  cartIsVisible: boolean;
  notification: INotification | null;
}

export interface ICartSlice {
  items: ICartItem[];
  totalQuantity: number;
  changed?: boolean;
}
