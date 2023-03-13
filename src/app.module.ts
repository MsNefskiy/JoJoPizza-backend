import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/jojo-pizza'),
        ProductModule,
    ]
})
export class AppModule {

}