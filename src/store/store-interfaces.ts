import {ICartItem} from "../interfaces";

export interface IUiSlice {
  cartIsVisible: boolean;
}

export interface ICartSlice {
  items: ICartItem[];
  totalQuantity: number;
}
