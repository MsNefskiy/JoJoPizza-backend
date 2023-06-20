import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Ingredient } from 'src/product/schemas/product.schema';
import { ITopping } from 'src/topping/topping.schema';

export interface ICartItem {
    itemId: string
    title: string
    image: string
    productPrice: number
    type?: string
    size?: number
    selectedToppings?: ITopping[]
    deletedIngredients?: Ingredient[]
    count: number
}

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    @Prop({ required: true })
    customer: string;

    @Prop({ required: true })
    telephone: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    street: string;

    @Prop({ required: true })
    entrance: string;

    @Prop({ required: true })
    floor: string;

    @Prop({ required: true })
    apartment: number;

    @Prop({ required: true })
    totalPrice: number;

    @Prop({type: Array, required: true})
    products: ICartItem[];

    @Prop({ required: true })
    date: Date;

    // @Prop()
    // content: [
    //     type: Array<Object>,
    //     of: {
    //         productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
    //         // toppings: [String]
    //         // count: Number
    //         // price: Number
    //     }
    // ]

}

export const OrderSchema = SchemaFactory.createForClass(Order);
