import { useState, useEffect } from 'react';
import SideToast from '@/components/utils/Toastify/SideToast';
import { useLocalStorage } from './useLocalStorage';
import axiosInstance from './interceptors/axiosInstance';

interface UseGetResult<T> {
    data: any | null;
    error: string | null;
    isLoading: boolean;
    refetch: () => Promise<void>;
}

export const useGet = <T,>(endpoint: string, runImmediately = true): UseGetResult<T> => {
    const [token] = useLocalStorage<any>('token', '');
    const [userSideToken] = useLocalStorage<any>('catcha%$#%', '');
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        const resolvedToken = token ?? userSideToken

        try {
            const response = await axiosInstance.get(endpoint, {
                headers: {
                    ...(resolvedToken ? { Authorization: `Bearer ${resolvedToken}` } : {}),
                },
            });
            console.log("DATA at Fetch", response.data)
            setData(response.data);
        } catch (err: any) {
            SideToast.FireError({ message: err?.response?.data?.msg || err.message });
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (runImmediately) {
            fetchData();
        }
    }, [endpoint]); // Triggers on mount and when endpoint changes

    return { data, error, isLoading, refetch: fetchData };
};
