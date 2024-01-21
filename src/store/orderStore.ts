import { create } from 'zustand';

interface OrderItem {
  quantity: number;
  price: number;
}

type OrderState = {
  items: Record<string, OrderItem>;
  addItem: (id: string, price: number) => void;
  removeItem: (id: string) => void;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
};

export const useOrderStore = create<OrderState>((set, get) => ({
  items: {},

  addItem: (id, price) =>
    set((state) => {
      const currentQuantity = state.items[id]?.quantity ?? 0;
      const newQuantity = currentQuantity < 999 ? currentQuantity + 1 : 999;
      return {
        items: {
          ...state.items,
          [id]: { quantity: newQuantity, price },
        },
      };
    }),

  removeItem: (id) =>
    set((state) => {
      const currentQuantity = state.items[id]?.quantity ?? 0;
      const newQuantity = currentQuantity > 0 ? currentQuantity - 1 : 0;
      return {
        items: {
          ...state.items,
          [id]: { quantity: newQuantity, price: state.items[id].price },
        },
      };
    }),

  getTotalQuantity: () => {
    const state = get();
    return Object.values(state.items).reduce(
      (total, item) => total + item.quantity,
      0
    );
  },

  getTotalPrice: () => {
    const state = get();
    return Object.values(state.items).reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  },
}));
