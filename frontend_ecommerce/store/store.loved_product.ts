import {IProduct} from "@/interfaces/products.interface";
import {create} from "zustand";
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface ICartState {
  items: IProduct[];
  addItem: (data: IProduct, quantity?: number) => void;
  removeItem: (id: number) => void;
  getItem: (id: number) => IProduct | undefined,
  removeAll: () => void;
}

const useLovedProductStore = create<ICartState>()(
  devtools(persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (data: IProduct) => {
        set((state: ICartState) => {
          const existingItem = state.items.find((item: IProduct) => item.id === data.id);
          console.log("hola")
          if (!existingItem) {
            return {
              items: [...state.items, { ...data, quantity: 1 }],
            };
          }
        
          return state
        });
      },
      getItem: (id: number): IProduct | undefined => {
        return get().items.find((item: IProduct) => item.id === id);
      },
      removeItem: (id: number) => {
        set((state: ICartState) => {

          return {
            items: state.items.filter((item: IProduct) => item.id !== id),
          }
        });
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
        name: 'loved_products',
        storage: createJSONStorage(()=>localStorage)
    }
  ))
);

export default useLovedProductStore;
