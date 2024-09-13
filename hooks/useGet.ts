import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import SideToast from '@/components/utils/Toastify/SideToast';
// import { cookies } from "next/headers";
interface UseGetResult<T> {
    data: any | null;
    error: string | null;
    isLoading: boolean;
    refetch: () => Promise<void>
}

export const useGet = <T,>(endpoint: string): UseGetResult<T> => {
    const [token, setToken] = useLocalStorage<any>("token", "");
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}${endpoint}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
                },
            });
            const result = await response.json();
            console.log(result);
            if (!response.ok) {
                let errorMsg = result.msg;
                throw new Error(errorMsg ?? 'Failed to fetch');
            }

            setData(result);
        } catch (err: any) {
            console.log("ERROR", err);
            SideToast.FireError({ message: err?.response?.data?.msg || err.message });
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {

        fetchData();
    }, [endpoint]); // Triggers on mount and when endpoint changes

    return { data, error, isLoading, refetch: fetchData };
};
