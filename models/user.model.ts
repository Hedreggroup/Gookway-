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
} export enum UserRole {
    VENDOR = 'vendor',
    CUSTOMER = 'customer',
    ADMIN = 'admin',
    SUPER_ADMIN = 'super admin',
    MANAGER = 'manager',
    VENDOR_MANAGER = 'vendor manager',
    VENDOR_ADMIN = 'vendor admin'
}


export let VendorRoles = [UserRole.VENDOR, UserRole.VENDOR_ADMIN, UserRole.VENDOR_MANAGER]
export let AdminRoles = [UserRole.VENDOR, UserRole.VENDOR_ADMIN, UserRole.VENDOR_MANAGER]
