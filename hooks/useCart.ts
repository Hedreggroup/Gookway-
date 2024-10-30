import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import axiosInstance from './interceptors/axiosInstance';
import { useGlobalStore } from '@/components/store/userStore';
import { usePost } from './usePosts';
import SideToast from '@/components/utils/Toastify/SideToast';

interface UseCartResult {
    cart: any[];
    addToCart: (product: any, quantity: number) => Promise<void>;
    fetchCart: () => Promise<any[]>;
    increaseItemQuantity: (productId: string) => void; // New method
    decreaseItemQuantity: (productId: string) => void; // New method

    totalPrice: number; // Add totalPrice
    isLoading: boolean;
    error: string | null;
}

export const useCart = (): UseCartResult => {
    const { addToCart: addToGlobalCart, totalPrice, setCart: setGlobalCart, cart, increaseItemQuantity, decreaseItemQuantity, } = useGlobalStore();
    const [token] = useLocalStorage<string | null>('user-token', null);     // Token to check if user is logged in
    const { execute, isLoading, error } = usePost();                   // UsePost hook for POST requests

    // Add product to cart
    const addToCart = async (productToAdd: any) => {

        if (token) {
            // If the user is logged in, send to network and update local storage
            await execute(`${process.env.NEXT_PUBLIC_BASEURL}/cart`, productToAdd);
            if (!error) {
                // Update global store and local storage after successful network call
                addToGlobalCart(productToAdd);
            }
        } else {
            addToGlobalCart(productToAdd);
            SideToast.FireSuccess({ message: "Item added to Cart!" });
        }
    };

    // Fetch cart from local storage and network (if logged in)
    const fetchCart = async (): Promise<any[]> => {
        const localCart = cart;

        if (!token) {
            // If not logged in, just return the local storage cart
            setGlobalCart(localCart);
            return localCart;
        }

        // If logged in, fetch cart from the network and update local storage
        try {
            const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_BASEURL}/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            const fetchedCart = response?.data?.data?.products || [];
            setGlobalCart(fetchedCart);  // Update global store

            return fetchedCart;
        } catch (error) {
            console.error('Error fetching cart from network:', error);
            return localCart; // Fallback to local storage if there's an error
        }
    };

    return {
        cart: cart, // Current cart from local storage (may be updated from network)
        addToCart,
        fetchCart,
        increaseItemQuantity, decreaseItemQuantity,
        isLoading,
        error,
        totalPrice
    };
};
