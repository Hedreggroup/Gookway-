
export default interface Transaction {
    _id: string;
    amount: number;
    user: string;
    transaction_status: TransactionStatus;
    transaction_type: TransactionType;
    ref: string;
    order_id: string;
    payment_type: string;
    created_at: string;
    updated_at: string;
}

export enum PaymentType {
    TRANSFER = 'transfer',
    BONUS = 'bonus',
    PURCHASE = 'purchase',
}

export enum TransactionType {
    DEPOSIT = 'deposit',
    WITHDRAWAL = 'withdrawal'
}

export enum TransactionStatus {
    PENDING = 'pending',
    DECLINED = 'declined',
    SUCCESSFUL = 'successful',
    FAILED = 'failed'
}