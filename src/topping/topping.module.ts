import { Module } from '@nestjs/common';
import { ToppingService } from './topping.service';
import { ToppingController } from './topping.controller';
import { Topping, ToppingSchema } from './topping.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Topping.name, schema: ToppingSchema }]),
    ],

    controllers: [ToppingController],
    providers: [ToppingService]
})
export class ToppingModule { }
