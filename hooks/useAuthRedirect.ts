// hooks/useAuthRedirect.ts
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocalStorage } from './useLocalStorage';
import { UserRole } from '@/models/user.model';

export const useAuthRedirect = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useLocalStorage<any>("user", "");
    const [token, setToken] = useLocalStorage<any>("token", "");
    const [customerToken, setCustomerToken] = useLocalStorage<any>("user-token", "");



    useEffect(() => {

        if (!token) {
            if (pathname.startsWith('/vendor')) {
                router.push('/vendor-login');
            }
            if (pathname.startsWith('/admin')) {
                router.push('/admin-login');
            }
        }
        else {
            const role = user.role
            if (role === UserRole.ADMIN) {
                router.push('/admin');
            } else if (role === UserRole.VENDOR) {
                router.push('/vendor');
            }
        }

    }, []);
};
