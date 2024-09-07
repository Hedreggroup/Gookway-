// hooks/usePost.ts
import { useState } from 'react';
import axios from 'axios';

interface UsePostResult<T> {
    data: T | null;
    error: string | null;
    isLoading: boolean;
    execute: (url: string, body: any) => Promise<void>;
}

export const usePost = <T,>(): UsePostResult<T> => {
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
                },
                withCredentials: true, // Include cookies
            });

            setData(response.data); // Set the response data
        } catch (err: any) {
            console.log("ERROR", err);
            setError(err.response?.data?.msg || err.message); // Handle error from axios response or fallback to the error message
        } finally {
            setIsLoading(false);
        }
    };

    return { data, error, isLoading, execute };
};
