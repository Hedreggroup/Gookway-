import { create } from "zustand";
import Product from "../../app/product/Product";
import SideToast from "../utils/Toastify/SideToast";
import { User } from "@/models/user.model";

interface IGlobalStore {
  token: string;
  currentUser: User;
  setToken: (token: string) => void;
  cart: any[];
  totalPrice: number; // Add totalPrice
  setCart: (cart: any[]) => void;
  addToCart: (product: any) => void;
  emptyCart: () => void;
  increaseItemQuantity: (productId: string) => void; // New method
  decreaseItemQuantity: (productId: string) => void; // New method
  shippingDetails: string;
  setShippingDetails: (shippingDetails: any) => void;
  filterText: string,
  setFilterText: (filterText:any)=> void,
  categoryText: string,
  setCategoryText: (filterText:any)=> void
}

let setItem = (key: string, value: any): void => {
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

export const useGlobalStore = create<IGlobalStore>((set) => ({
  token: getItem("token") || "",
  setToken: (token: any) => set((state) => {
    setItem("token", token);
    return { token: token };
  }),
  currentUser: getItem("user") || null,
  // setCurrentUser:(user: any) => set((state) => {
  //   setItem("user", user);
  //   return { user: user };
  // }),
  cart: getItem("cart") || [],  // Ensure cart is an array
  totalPrice: 0, // Initialize totalPrice
  setCart: (cart: any[]) => {
    setItem("cart", cart);
    set({ cart });
  },
  shippingDetails: '',
  setShippingDetails: (shippingDetails: any) => set({ shippingDetails }),
  addToCart: (product: any) => set((state) => {
    console.log("PRODUCT TO ADD", product);

    let cartItems = state.cart;
    const itemExist = cartItems.find(
      (item) => item.product_id === product.product_id
    );
    let updatedCart;

    if (itemExist) {
      // If item exists, update the quantity
      updatedCart = cartItems.map((item) =>
        item.product_id === product.product_id
          ? { ...item, quantity: item.quantity + product.quantity } // Update quantity
          : item
      );
      SideToast.FireWarning({ message: "Item already in Cart!, quantity updated" });
    } else {
      updatedCart = [...state.cart, { ...product, quantity: 1 }]; // Set initial quantity to 1

    }

    setItem("cart", updatedCart);

    // Calculate the total price
    const totalPrice = updatedCart.reduce((total, item) => {
      return total + (item.price * item.quantity); // Ensure you have a price and quantity in your product object
    }, 0);

    // Debugging: Log the updated cart and total price
    console.log("updatedCart", updatedCart);
    console.log("Total Price", totalPrice);

    return { cart: updatedCart, totalPrice }; // Return updated totalPrice
  }),
  increaseItemQuantity: (productId: string) => set((state) => {
    const updatedCart = state.cart.map((item) =>
      item.product_id === productId
        ? { ...item, quantity: item.quantity + 1, total_item_price: item.product_price * (item.quantity + 1) } // Increase quantity
        : item
    );

    setItem("cart", updatedCart);
    const totalPrice = updatedCart.reduce((total, item) => total + (item.product_price * item.quantity), 0);

    return { cart: updatedCart, totalPrice }; // Return updated totalPrice
  }),
  decreaseItemQuantity: (productId: string) => set((state) => {
    const updatedCart = state.cart.map((item) => {
      if (item.product_id === productId) {
        const newQuantity = item.quantity - 1;
        if (newQuantity <= 0) {
          return null; // Remove item if quantity is 0
        }
        return { ...item, quantity: newQuantity, total_item_price: item.product_price * (item.quantity - 1) }; // Decrease quantity
      }
      return item;
    }).filter(Boolean); // Remove null values

    setItem("cart", updatedCart);
    const totalPrice = updatedCart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return { cart: updatedCart, totalPrice }; // Return updated totalPrice
  }),
  emptyCart: () => {
    setItem('cart', []);
    set({ cart: [], totalPrice: 0 }); // Reset totalPrice when emptying the cart
  },
  filterText: "",
  setFilterText: (filterText: string) => set({ filterText }),
  categoryText: "",
  setCategoryText: (categoryText: string) => set({ categoryText }),
}));
