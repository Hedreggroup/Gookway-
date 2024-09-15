export interface User {
    balance: number;
    _id: string;
    email: string;
    full_name: string;
    profile_image: string;
    role: 'vendor' | 'admin' | 'user';  // Adjust roles as needed
    status: boolean;
    last_login: string;  // ISO string date format
    is_verified: boolean | string;
    created_at: string;
    updated_at: string;
    shipping_addresses: [];
}
