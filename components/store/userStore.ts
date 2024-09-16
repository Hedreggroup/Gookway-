import { create } from "zustand";
import Product from "../Product";

interface IGlobalStore {
    token: string
    setToken: (token:string)=> void
    cart: any[];
    setCart: (cart: any[]) => void;
    addToCart: (product: any) => void;
    emptyCart: () => void
    shippingDetails: {},
    setShippingDetails:(shippingDetails:any)=> void
} 

let setItem = (key: string, value: any):void => {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  let getItem = (key: string): any => {
    let item
    if (typeof window !== 'undefined') {
       item = localStorage.getItem(key);
    }
    try {
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error("Error parsing JSON from localStorage", e);
      return null;
    }
  };

export const useGlobalStore = create<IGlobalStore>((set)=> ({
    token:getItem("token") ||"",
    setToken:(token:any)=> set((state)=>{
        setItem("token", token);
        return { token: token };
    }),
    cart: getItem("cart") || [],  // Ensure cart is an array
    setCart: (cart: any[]) => {
        setItem("cart", cart);
        set({ cart });
    },
    shippingDetails: {},
    setShippingDetails: (shippingDetails:any)=> set({shippingDetails}),
    addToCart: (product: any) => set((state) => {
        const updatedCart = [...state.cart, product];
        setItem("cart", updatedCart);
        return { cart: updatedCart };
    }),
    emptyCart: () => {
      setItem('cart', []);
      set({ cart: [] });
    },
}))