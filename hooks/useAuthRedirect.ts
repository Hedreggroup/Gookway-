// hooks/useAuthRedirect.ts
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocalStorage } from './useLocalStorage';

export const useAuthRedirect = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useLocalStorage<any>("user", "");
    const [token, setToken] = useLocalStorage<any>("token", "");
    const [customerToken, setCustomerToken] = useLocalStorage<any>("user-token", "");



    useEffect(() => {
        const role = user.role

        if (!token) {
            if (pathname.startsWith('/vendor')) {
                router.push('/vendor-login');
            }
            if (pathname.startsWith('/admin')) {
                router.push('/admin-login');
            }
        }
        else {
            if (role === 'admin') {
                router.push('/admin');
            } else {
                router.push('/vendor');
            }
        }

    }, []);
};
