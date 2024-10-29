import { useState, useEffect } from 'react';
import SideToast from '@/components/utils/Toastify/SideToast';
import { useLocalStorage } from './useLocalStorage';
import axiosInstance from './interceptors/axiosInstance';
import { User, UserRole } from '@/models/user.model';

interface UseGetResult<T> {
    data: any | null;
    error: string | null;
    isLoading: boolean;
    refetch: () => Promise<void>;
}

export const useGet = <T,>(endpoint: string, runImmediately = true): UseGetResult<T> => {
    const [adminToken] = useLocalStorage<any>("token", null);
    const [userSideToken] = useLocalStorage<any>("user-token", null);
    const [user, setUser] = useLocalStorage<User | null>("user", null);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        // const resolvedToken = token ?? userSideToken
        const resolvedToken = user?.role == UserRole.CUSTOMER ? userSideToken : adminToken;

        try {
            const response = await axiosInstance.get(endpoint, {
                headers: {
                    ...(resolvedToken ? { Authorization: `Bearer ${resolvedToken}` } : {}),
                },
            });
            console.log("DATA at Fetds dsch", response.data)
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
