import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ToppingDocument = Topping & Document;

// export enum ToppingCategory {
//     CHEESE = "Сыр",
//     SAUSE = "Соус",
// }

export interface ITopping {
    name: string;
    category: string
    image: string;
    price: number;
}

@Schema()
export class Topping {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    category: string;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    price: number;
}

export const ToppingSchema = SchemaFactory.createForClass(Topping);
