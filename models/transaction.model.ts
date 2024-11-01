import { User } from "./user.model";

export interface Transaction {
    _id: string;
    user: string;
    amount: number;
    ref: string;
    order_id: string;
    transaction_status: 'successful' | 'pending' | 'failed'; // Possible transaction statuses
    transaction_type: 'deposit' | 'withdrawal'; // Possible transaction types
    payment_type: 'purchase' | 'refund'; // Possible payment types
    created_at: string;
    updated_at: string;
    __v: number;
}
