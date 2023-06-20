import { ICartItem } from "../schemas/order.schema";

export class CreateOrderDto {
    customer: string;
    telephone: string;
    email: string;
    street: string;
    entrance: string;
    floor: string;
    apartment: number;
    totalPrice: number;
    products: ICartItem[];
    date: Date;
}
