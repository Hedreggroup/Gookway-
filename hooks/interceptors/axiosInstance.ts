// services/axiosInstance.ts
import axios from 'axios';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import SideToast from '@/components/utils/Toastify/SideToast';
import { setToken } from './tokenService';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
    withCredentials: true, // Allows sending cookies
});

const refreshToken = async () => {
    try {
        const response = await axiosInstance.post('/users/refresh-token', {}, { withCredentials: true });
        return response.data.token; // Assuming the new access token is returned here
    } catch (error) {
        SideToast.FireError({ message: "Failed to refresh token" });
        throw error; // Handle token refresh failure
    }
};

// Add interceptor to handle token expiration and refreshing
axiosInstance.interceptors.response.use(
    (response) => response, // Pass through if the response is successful
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            // Attempt to refresh the token
            try {
                const newToken = await refreshToken();
                setToken(newToken); // Update the token in local storage

                // Update the Authorization header and retry the request
                originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                return axiosInstance(originalRequest); // Retry the original request with the new token
            } catch (refreshError) {
                return Promise.reject(refreshError); // Handle the refresh error
            }
        }

        return Promise.reject(error); // Reject if it's not a 401 error or token refresh fails
    }
);

export default axiosInstance;
