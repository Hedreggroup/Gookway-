import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

interface UseGetResult<T> {
    data: any | null;
    error: string | null;
    isLoading: boolean;
}

export const useGet = <T,>(endpoint: string): UseGetResult<T> => {
    const [token, setToken] = useLocalStorage<any>("token", "");
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
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
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [endpoint]); // Triggers on mount and when endpoint changes

    return { data, error, isLoading };
};
