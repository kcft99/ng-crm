import { OrderItem } from './orderItem.model';

export interface Order {
    orderNumber: string;
    total: number;
    orderItems: Array<OrderItem>;
}
