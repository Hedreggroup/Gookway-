import { useState } from 'react';
import SideToast from '@/components/utils/Toastify/SideToast';
import { useLocalStorage } from './useLocalStorage';
import axiosInstance from './interceptors/axiosInstance';
import { User, UserRole } from '@/models/user.model';

interface UseDeleteResult<T> {
    data: T | null;
    error: string | null;
    isLoading: boolean;
    execute: (url: string, body: any) => Promise<void>;
}

export const useDelete = <T,>(): UseDeleteResult<T> => {
    const [adminToken] = useLocalStorage<any>("token", "");
    const [userSideToken] = useLocalStorage<any>("user-token", "");
    const [user, setUser] = useLocalStorage<User | null>("user", null);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const execute = async (endpoint: string, body: any) => {
        setIsLoading(true);
        setError(null);
        console.log("UserRole.CUSTOMER", UserRole.CUSTOMER, user?.role)
        const token = user?.role == UserRole.CUSTOMER ? userSideToken : adminToken;
        try {
            console.log("TOKEN", token)
            const response = await axiosInstance.delete(endpoint, {

                headers: {
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
                },
            });

            setData(response.data); // Set the response data
            SideToast.FireSuccess({ message: "Details Updated" });
        } catch (error: any) {
            console.error("ERROR", error);
            setError(error.response?.data?.msg || error.message); // Handle error from axios response or fallback to the error message
            SideToast.FireError({ message: error.response?.data?.msg || error.message });
        } finally {
            setIsLoading(false);
        }
    };

    return { data, error, isLoading, execute };
};
