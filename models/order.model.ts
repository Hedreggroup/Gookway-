import { User } from "./user.model";

export interface Order {
    _id: string;
    customer: User;
    shipping_address: string;
    total_price: number;
    cart: string;
    payment_status: 'successful' | 'pending' | 'failed'; // Possible payment statuses
    created_at: string;
    updated_at: string;
    __v: number;
    items: OrderItem[];
    id: string;
}

export interface OrderItem {
    _id: string;
    product: {
        _id: string;
        name: string;
        images: string[];
        id: string;
    };
    order: string;
    quantity: number;
    price: number;
    vendor: {
        _id: string;
        full_name: string;
        profile_image: string;
    };
    item_shipping_status: 'pending' | 'shipped' | 'delivered'; // Possible shipping statuses
    __v: number;
}
