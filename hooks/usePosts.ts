// hooks/usePost.ts
import { useState } from 'react';
import axios from 'axios';
import SideToast from '@/components/utils/Toastify/SideToast';
import { useLocalStorage } from './useLocalStorage';

interface UsePostResult<T> {
    data: T | any | null;
    error: string | null;
    isLoading: boolean;
    execute: (url: string, body: any) => Promise<void>;
}

export const usePost = <T,>(): UsePostResult<T> => {
    const [token, setToken] = useLocalStorage<any>("token", "");
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const execute = async (endpoint: string, body: any) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASEURL}${endpoint}`, body, {
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
                },
                withCredentials: true,
            });

            setData(response.data); // Set the response data
            SideToast.FireSuccess({ message: response?.data?.msg || "Success" });

        } catch (error: any) {
            console.log("ERROR", error);
            setError(error.response?.data?.msg || error.message); // Handle error from axios response or fallback to the error message
            SideToast.FireError({ message: error?.response?.data?.msg || error.message });
        } finally {
            setIsLoading(false);
        }
    };

    return { data, error, isLoading, execute };
};
