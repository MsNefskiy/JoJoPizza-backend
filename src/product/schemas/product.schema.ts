import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export interface Ingredient {
    name: string
    isRequired: boolean
}

@Schema()
export class Product {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    category: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({default: 0})
    rating: number;

    @Prop({type: Object})
    specifications: {
        doughs: number[];
        sizes: number[];
        type: string[];
        ingredients: Ingredient[];
    }

    @Prop({required: true})
    mass: number;

    // @Prop(raw({
    //     size: String,
    //     thicknessDough: String                
    // }))
    // composition: Record<string, any>

    // @Prop({type: mongoose.Schema.Types.ObjectId, ref: Option})
    // option: Option;

    // @Prop()
    // comments: [{ body: String, date: Date }]

    // @Prop({minimize: false})
    // meta: {
    //     votes: Number,
    //     favs:  Number
    //   }

    // date: { type: Date, default: Date.now },

}

export type ProductDocument = HydratedDocument<Product>;
export const ProductSchema = SchemaFactory.createForClass(Product);
