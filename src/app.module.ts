import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { ToppingModule } from './topping/topping.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";
import { ConfigModule } from "@nestjs/config";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGO_URL),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, "..", 'static'),
        }),
        ProductModule,
        OrderModule,
        ToppingModule,
        FeedbackModule,
    ]
})
export class AppModule {

}