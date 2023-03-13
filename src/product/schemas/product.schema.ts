import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    name: string;

    @Prop()
    image: string;

    @Prop()
    category: string;

    @Prop()
    price: number;

    @Prop()
    description: string;

    @Prop()
    mass: number;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
