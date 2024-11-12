import {IProduct} from "@/interfaces/products.interface";
import {create} from "zustand";
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

export interface IProductToCart extends IProduct {
  quantity: number
}

interface ICartState {
  items: IProductToCart[];
  total: number,
  addItem: (data: IProduct, quantity?: number) => void;
  incrementTotal: (price: number) => void,
  decrementTotal: (price: number) => void,
  removeItem: (id: number) => void;
  getItem: (id: number) => IProductToCart | undefined,
  removeAll: () => void;
}

const useStoreCart = create<ICartState>()(
  devtools(persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (data: IProduct, quantity: undefined | number = undefined) => {
        set((state: ICartState) => {
          const existingItem = state.items.find((item: IProductToCart) => item.id === data.id);

          if (!existingItem) {
            return {
              total: state.total + (data.attributes.price),
              items: [...state.items, { ...data, quantity: 1 }],
            };
          }else {
            return {
              items: state.items.map((item: IProductToCart) => item.id === data.id
                ? ({...item, quantity: quantity? quantity: 1})
                : (item)),
            }
          }
        });
      },
      getItem: (id: number): IProductToCart | undefined => {
        return get().items.find((item: IProductToCart) => item.id === id);
      },
      incrementTotal: (price: number) => {
        set((state: ICartState) => {
          return {total: state.total + price} 
        })
      },
      decrementTotal: (price: number) => {
        set((state: ICartState) => {
          return {total: state.total - price} 
        })
      },
      removeItem: (id: number) => {
        set((state: ICartState) => {
          const item = state.items.filter((item: IProductToCart) => item.id === id)[0]

          return {
            items: state.items.filter((item: IProductToCart) => item.id !== id),
            total: state.total - (item.attributes.price * item.quantity)
          }
        });
      },
      removeAll: () => {
        set({ items: [], total: 0 });
      },
    }),
    {
        name: 'cart',
        storage: createJSONStorage(()=>localStorage)
    }
  ))
);

export default useStoreCart;
