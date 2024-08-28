import { create } from "zustand";

interface IGlobalStore {
    token: string
    setToken: (token:string)=> void
    cart: any[];
    setCart: (cart: any[]) => void;
    addToCart: (product: any) => void;
} 

let setItem = (key: string, value: any):void => {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  let getItem = (key: string): any => {
    let item = localStorage.getItem(key);
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
    addToCart: (product: any) => set((state) => {
        const updatedCart = [...state.cart, product];
        setItem("cart", updatedCart);
        return { cart: updatedCart };
    }),
}))