export interface User {
    balance: number;
    _id: string;
    email: string;
    full_name: string;
    profile_image: string;
    role: UserRole;  // Adjust roles as needed
    status: boolean;
    last_login: string;  // ISO string date format
    is_verified: boolean | string;
    created_at: string;
    updated_at: string;
    shipping_addresses: [];
}
export enum UserRole {
    VENDOR = 'vendor',
    CUSTOMER = 'customer',
    ADMIN = 'admin',
}
